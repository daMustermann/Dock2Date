from setuptools import setup, find_packages
from pydock2date import VERSION


def read(filename):
    with open(filename) as f:
        return f.read()


def get_requirements(filename="requirements.txt"):
    """returns a list of all requirements"""
    requirements = read(filename)
    return list(filter(None, [req.strip() for req in requirements.split() if not req.startswith('#')]))


setup(
    name='dock2date-cli',
    version=VERSION,
    author='circa10a',
    author_email='caleblemoine@gmail.com',
    maintainer='daMustermann',
    maintainer_email='your-email@example.com',
    description='Automatically update running docker containers',
    long_description=read('README.md'),
    long_description_content_type='text/markdown',
    url='https://github.com/daMustermann/Dock2Date',
    license='MIT',
    packages=['pydock2date', 'web'],
    scripts=['dock2date'],
    install_requires=get_requirements(),
    python_requires='>=3.6.2'
)
