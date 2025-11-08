// Dock2Date Web UI JavaScript
class Dock2DateUI {
    constructor() {
        this.containers = [];
        this.config = {};
        this.metrics = {};
        this.logs = [];
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadData();
        this.startAutoRefresh();
    }

    bindEvents() {
        // Settings button
        document.getElementById('settings-btn').addEventListener('click', () => {
            document.getElementById('config-section').style.display = 'block';
            document.getElementById('config-section').scrollIntoView({ behavior: 'smooth' });
        });

        // Close config button
        document.getElementById('close-config-btn').addEventListener('click', () => {
            document.getElementById('config-section').style.display = 'none';
        });

        // Refresh button
        document.getElementById('refresh-btn').addEventListener('click', () => {
            this.loadData();
        });

        // Config tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Data export change
        document.getElementById('data-export').addEventListener('change', (e) => {
            this.toggleMetricsSettings(e.target.value);
        });

        // Save config
        document.getElementById('save-config-btn').addEventListener('click', () => {
            this.saveConfig();
        });

        // Reset config
        document.getElementById('reset-config-btn').addEventListener('click', () => {
            this.loadConfig();
        });

        // Container filter
        document.getElementById('container-filter').addEventListener('change', (e) => {
            this.filterContainers(e.target.value);
        });

        // Add notifier
        document.getElementById('add-notifier-btn').addEventListener('click', () => {
            document.getElementById('notifier-modal').classList.add('active');
        });

        // Close notifier modal
        document.getElementById('close-notifier-modal').addEventListener('click', () => {
            document.getElementById('notifier-modal').classList.remove('active');
        });

        document.getElementById('cancel-notifier-btn').addEventListener('click', () => {
            document.getElementById('notifier-modal').classList.remove('active');
        });

        // Save notifier
        document.getElementById('save-notifier-btn').addEventListener('click', () => {
            this.saveNotifier();
        });

        // Refresh logs
        document.getElementById('refresh-logs-btn').addEventListener('click', () => {
            this.loadLogs();
        });
    }

    async loadData() {
        try {
            await Promise.all([
                this.loadContainers(),
                this.loadConfig(),
                this.loadMetrics(),
                this.loadLogs()
            ]);
            this.updateStats();
            this.renderContainers();
            this.renderLogs();
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }

    async loadContainers() {
        try {
            const response = await fetch('/api/containers');
            this.containers = await response.json();
        } catch (error) {
            console.error('Error loading containers:', error);
            this.containers = [];
        }
    }

    async loadConfig() {
        try {
            const response = await fetch('/api/config');
            const data = await response.json();
            this.config = data.app_config || {};
            this.webConfig = data.web_config || {};
            this.populateConfigForm();
        } catch (error) {
            console.error('Error loading config:', error);
        }
    }

    async loadMetrics() {
        try {
            const response = await fetch('/api/metrics');
            this.metrics = await response.json();
        } catch (error) {
            console.error('Error loading metrics:', error);
            this.metrics = {};
        }
    }

    async loadLogs() {
        try {
            const response = await fetch('/api/logs');
            const data = await response.json();
            this.logs = data.logs || [];
        } catch (error) {
            console.error('Error loading logs:', error);
            this.logs = [];
        }
    }

    updateStats() {
        const total = this.containers.length;
        const running = this.containers.filter(c => c.status.toLowerCase().includes('running')).length;
        const stopped = total - running;

        document.getElementById('total-containers').textContent = total;
        document.getElementById('running-containers').textContent = running;
        document.getElementById('stopped-containers').textContent = stopped;
        document.getElementById('updates-available').textContent = '--'; // TODO: Implement update checking
    }

    renderContainers() {
        const grid = document.getElementById('containers-grid');
        const filter = document.getElementById('container-filter').value;

        let filteredContainers = this.containers;
        if (filter === 'running') {
            filteredContainers = this.containers.filter(c => c.status.toLowerCase().includes('running'));
        } else if (filter === 'stopped') {
            filteredContainers = this.containers.filter(c => !c.status.toLowerCase().includes('running'));
        }

        grid.innerHTML = filteredContainers.map(container => this.createContainerCard(container)).join('');
    }

    createContainerCard(container) {
        const isRunning = container.status.toLowerCase().includes('running');
        const statusClass = isRunning ? 'running' : 'stopped';
        const statusText = isRunning ? 'Running' : 'Stopped';

        return `
            <div class="container-card glass-card ${statusClass} fade-in" onclick="ui.showContainerDetails('${container.id}')">
                <div class="container-header">
                    <div>
                        <div class="container-name">${container.name}</div>
                        <div class="container-image">${container.image}</div>
                    </div>
                    <div class="container-status ${statusClass}">${statusText}</div>
                </div>
                <div class="container-details">
                    <div class="detail-item">
                        <div class="detail-label">Created</div>
                        <div class="detail-value">${new Date(container.created * 1000).toLocaleDateString()}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Socket</div>
                        <div class="detail-value">${container.socket}</div>
                    </div>
                </div>
            </div>
        `;
    }

    renderLogs() {
        const container = document.getElementById('logs-container');
        container.innerHTML = this.logs.map(log => `
            <div class="log-entry">
                <div class="log-timestamp">${log.timestamp}</div>
                <div class="log-level ${log.level.toLowerCase()}">${log.level}</div>
                <div class="log-message">${log.message}</div>
            </div>
        `).join('');
    }

    populateConfigForm() {
        // General settings
        this.setFormValue('interval', this.config.INTERVAL || 300);
        this.setFormValue('log-level', this.config.LOG_LEVEL || 'info');
        this.setFormValue('timezone', this.config.TZ || 'UTC');
        this.setFormValue('language', this.config.LANGUAGE || 'en');

        // Behavior checkboxes
        this.setCheckboxValue('self-update', this.config.SELF_UPDATE);
        this.setCheckboxValue('cleanup', this.config.CLEANUP);
        this.setCheckboxValue('dry-run', this.config.DRY_RUN);
        this.setCheckboxValue('monitor-only', this.config.MONITOR_ONLY);

        // Docker settings
        this.setFormValue('docker-sockets', (this.config.DOCKER_SOCKETS || []).join(' '));
        this.setFormValue('docker-timeout', this.config.DOCKER_TIMEOUT || 60);
        this.setCheckboxValue('swarm', this.config.SWARM);
        this.setCheckboxValue('label-enable', this.config.LABEL_ENABLE);
        this.setCheckboxValue('labels-only', this.config.LABELS_ONLY);

        // Container filters
        this.setFormValue('monitor', (this.config.MONITOR || []).join(' '));
        this.setFormValue('ignore', (this.config.IGNORE || []).join(' '));

        // Metrics
        this.setFormValue('data-export', this.config.DATA_EXPORT || '');
        this.toggleMetricsSettings(this.config.DATA_EXPORT);

        if (this.config.DATA_EXPORT === 'prometheus') {
            this.setFormValue('prometheus-addr', this.config.PROMETHEUS_ADDR || '127.0.0.1');
            this.setFormValue('prometheus-port', this.config.PROMETHEUS_PORT || 8000);
        } else if (this.config.DATA_EXPORT === 'influxdb') {
            this.setFormValue('influx-url', this.config.INFLUX_URL || '127.0.0.1');
            this.setFormValue('influx-port', this.config.INFLUX_PORT || 8086);
            this.setFormValue('influx-username', this.config.INFLUX_USERNAME || 'root');
            this.setFormValue('influx-password', this.config.INFLUX_PASSWORD || 'root');
            this.setFormValue('influx-database', this.config.INFLUX_DATABASE || '');
        }

        // Notifiers
        this.renderNotifiers();
    }

    setFormValue(id, value) {
        const element = document.getElementById(id);
        if (element) {
            element.value = value;
        }
    }

    setCheckboxValue(id, checked) {
        const element = document.getElementById(id);
        if (element) {
            element.checked = checked || false;
        }
    }

    toggleMetricsSettings(exportType) {
        document.querySelector('.prometheus-settings').style.display = exportType === 'prometheus' ? 'block' : 'none';
        document.querySelector('.influxdb-settings').style.display = exportType === 'influxdb' ? 'block' : 'none';
    }

    renderNotifiers() {
        const container = document.getElementById('notifiers-list');
        const notifiers = this.config.NOTIFIERS || [];

        container.innerHTML = notifiers.map((notifier, index) => `
            <div class="notifier-item glass-card" style="padding: 1rem; margin-bottom: 0.5rem;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <strong>${notifier.name || `Notifier ${index + 1}`}</strong>
                        <div style="color: var(--text-secondary); font-size: 0.9rem;">${this.maskNotifierUrl(notifier.url)}</div>
                    </div>
                    <button class="btn-close" onclick="ui.removeNotifier(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    maskNotifierUrl(url) {
        // Mask sensitive parts of URLs
        return url.replace(/:\/\/([^:]+):([^@]+)@/, '://***:***@')
                  .replace(/([?&])(token|key|password|pass)=([^&]+)/gi, '$1$2=***');
    }

    switchTab(tabName) {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.config-tab').forEach(tab => tab.classList.remove('active'));

        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        document.getElementById(`${tabName}-tab`).classList.add('active');
    }

    async saveConfig() {
        const config = {
            // General
            INTERVAL: parseInt(document.getElementById('interval').value),
            LOG_LEVEL: document.getElementById('log-level').value,
            TZ: document.getElementById('timezone').value,
            LANGUAGE: document.getElementById('language').value,

            // Behavior
            SELF_UPDATE: document.getElementById('self-update').checked,
            CLEANUP: document.getElementById('cleanup').checked,
            DRY_RUN: document.getElementById('dry-run').checked,
            MONITOR_ONLY: document.getElementById('monitor-only').checked,

            // Docker
            DOCKER_SOCKETS: document.getElementById('docker-sockets').value.split(' ').filter(s => s),
            DOCKER_TIMEOUT: parseInt(document.getElementById('docker-timeout').value),
            SWARM: document.getElementById('swarm').checked,
            LABEL_ENABLE: document.getElementById('label-enable').checked,
            LABELS_ONLY: document.getElementById('labels-only').checked,

            // Filters
            MONITOR: document.getElementById('monitor').value.split(' ').filter(s => s),
            IGNORE: document.getElementById('ignore').value.split(' ').filter(s => s),

            // Metrics
            DATA_EXPORT: document.getElementById('data-export').value,
        };

        if (config.DATA_EXPORT === 'prometheus') {
            config.PROMETHEUS_ADDR = document.getElementById('prometheus-addr').value;
            config.PROMETHEUS_PORT = parseInt(document.getElementById('prometheus-port').value);
        } else if (config.DATA_EXPORT === 'influxdb') {
            config.INFLUX_URL = document.getElementById('influx-url').value;
            config.INFLUX_PORT = parseInt(document.getElementById('influx-port').value);
            config.INFLUX_USERNAME = document.getElementById('influx-username').value;
            config.INFLUX_PASSWORD = document.getElementById('influx-password').value;
            config.INFLUX_DATABASE = document.getElementById('influx-database').value;
        }

        try {
            const response = await fetch('/api/config', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(config)
            });

            const result = await response.json();
            if (result.status === 'success') {
                this.showNotification('Configuration saved successfully!', 'success');
                this.loadConfig(); // Reload to get updated config
            } else {
                this.showNotification('Error saving configuration: ' + result.message, 'error');
            }
        } catch (error) {
            this.showNotification('Error saving configuration: ' + error.message, 'error');
        }
    }

    async saveNotifier() {
        const url = document.getElementById('notifier-url').value;
        const name = document.getElementById('notifier-name').value;

        if (!url) {
            this.showNotification('Notifier URL is required', 'error');
            return;
        }

        const notifiers = this.config.NOTIFIERS || [];
        notifiers.push({ url, name: name || '' });

        try {
            const response = await fetch('/api/config', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ NOTIFIERS: notifiers })
            });

            const result = await response.json();
            if (result.status === 'success') {
                document.getElementById('notifier-modal').classList.remove('active');
                document.getElementById('notifier-url').value = '';
                document.getElementById('notifier-name').value = '';
                this.loadConfig(); // Reload config
                this.showNotification('Notifier added successfully!', 'success');
            } else {
                this.showNotification('Error adding notifier: ' + result.message, 'error');
            }
        } catch (error) {
            this.showNotification('Error adding notifier: ' + error.message, 'error');
        }
    }

    async removeNotifier(index) {
        const notifiers = this.config.NOTIFIERS || [];
        notifiers.splice(index, 1);

        try {
            const response = await fetch('/api/config', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ NOTIFIERS: notifiers })
            });

            const result = await response.json();
            if (result.status === 'success') {
                this.loadConfig(); // Reload config
                this.showNotification('Notifier removed successfully!', 'success');
            } else {
                this.showNotification('Error removing notifier: ' + result.message, 'error');
            }
        } catch (error) {
            this.showNotification('Error removing notifier: ' + error.message, 'error');
        }
    }

    filterContainers(filter) {
        this.renderContainers();
    }

    showContainerDetails(containerId) {
        // TODO: Implement detailed container view
        console.log('Show details for container:', containerId);
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        // Add to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);

        // Remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 5000);
    }

    startAutoRefresh() {
        // Auto refresh every 30 seconds
        setInterval(() => {
            this.loadContainers();
            this.loadMetrics();
            this.updateStats();
            this.renderContainers();
        }, 30000);
    }
}

// Initialize UI when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.ui = new Dock2DateUI();
});