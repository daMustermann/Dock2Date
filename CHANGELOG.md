# Change Log

## [v2.0.0](https://github.com/gmt2001/Dock2Date/tree/v2.0.0) (2025-11-07)

**Implemented enhancements:**

- Renamed the project from "ouroboros" to "Dock2Date".
- Pinned all dependencies to their latest stable versions.
- Updated the base Docker image to the latest Python version.

---

## [v1.9.0](https://github.com/gmt2001/Dock2Date/tree/v1.9.0) (2021-09-20)
[Full Changelog](https://github.com/gmt2001/Dock2Date/compare/1.9.0...v1.8.0)

**Implemented enhancements:**

- Added the ability to change the Docker client timeout via DOCKER_TIMEOUT environment variable [\#33](https://github.com/gmt2001/Dock2Date/pull/33) ([gkovelman](https://github.com/gkovelman))

## [v1.8.0](https://github.com/gmt2001/Dock2Date/tree/v1.8.0) (2021-06-14)
[Full Changelog](https://github.com/gmt2001/Dock2Date/compare/1.8.0...v1.7.0)

**Implemented enhancements:**

- Added the ability to translate the notifications sent out via apprise [\#28](https://github.com/gmt2001/Dock2Date/pull/28) ([TaixMiguel](https://github.com/TaixMiguel))

## [v1.7.0](https://github.com/gmt2001/Dock2Date/tree/v1.7.0) (2020-11-15)
[Full Changelog](https://github.com/gmt2001/Dock2Date/compare/1.7.0...v1.6.0)

**Fixed bugs:**

- Bump Apprise to v0.8.5, which fixes the slack Token B limit issue [pydock2date#385](https://github.com/pydock2date/Dock2Date/pull/385) ([Mdleal](https://github.com/Mdleal))
- Fixed issue where multiple containers which are on different tags that point to the same image id would be updated, when only one tag actually had an update available [pydock2date#393](https://github.com/pydock2date/Dock2Date/pull/393) ([koreno](https://github.com/koreno))
- Fixed issue where multiple containers which are on different tags could end up all switching to the updated tag unintentionally [\pydock2date#395](https://github.com/pydock2date/Dock2Date/pull/395) ([koreno](https://github.com/koreno))

## [v1.6.0](https://github.com/gmt2001/Dock2Date/tree/v1.6.0) (2020-06-11)
[Full Changelog](https://github.com/gmt2001/Dock2Date/compare/1.6.0...v1.5.1)

**Implemented enhancements:**

- Added hooks system
- Added option to cleanup unused volumes [\#6](https://github.com/gmt2001/Dock2Date/pull/6) ([MENTAL](https://github.com/thisis-mental))

## [v1.5.1](https://github.com/gmt2001/Dock2Date/tree/v1.5.1) (2020-06-11)
[Full Changelog](https://github.com/gmt2001/Dock2Date/compare/1.5.1...v1.4.3)

**Implemented enhancements:**

- Added Monitor only capacity [\#4](https://github.com/gmt2001/Dock2Date/pull/4) ([RUSSANDOL](https://github.com/russandol-sarl))
- Switched GitHub Actions build chain

**Fixed bugs:**

- Let Apprise know that emails are sent as text, not HTML [\#3](https://github.com/gmt2001/Dock2Date/pull/3) ([Felix Engelmann](https://github.com/felix-engelmann))
- Added patch as images in gitlab registrys dont have @sha256: part of the image therefore it needs to be pulled from the image name 'RepoDigests" [\#2](https://github.com/gmt2001/Dock2Date/pull/2) ([samson4649](https://github.com/samson4649))
- Apprise - Fix Slack issue - Token B limited to 8 characters [\#1](https://github.com/gmt2001/Dock2Date/pull/1) ([Mdleal](https://github.com/Mdleal))

## [1.4.3](https://github.com/pydock2date/Dock2Date/tree/1.4.3) (2019-12-11)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/1.4.3...1.4.2)

**Fixed bugs:**

- Join Notifications truncated and icon returning 404 [\#325](https://github.com/pydock2date/Dock2Date/issues/325)

**Other Pull Requests**

- v1.4.3 Merge [\#354](https://github.com/pydock2date/Dock2Date/pull/354) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- v1.4.3 to develop [\#353](https://github.com/pydock2date/Dock2Date/pull/353) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Update requirements.txt [\#349](https://github.com/pydock2date/Dock2Date/pull/349) ([nemchik](https://github.com/nemchik))

## [1.4.2](https://github.com/pydock2date/Dock2Date/tree/1.4.2) (2019-08-01)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/1.4.1...1.4.2)

**Other Pull Requests**

- 1.4.2 Merge [\#327](https://github.com/pydock2date/Dock2Date/pull/327) ([circa10a](https://github.com/circa10a))
- 1.4.2 to develop [\#326](https://github.com/pydock2date/Dock2Date/pull/326) ([circa10a](https://github.com/circa10a))

## [1.4.1](https://github.com/pydock2date/Dock2Date/tree/1.4.1) (2019-06-04)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/v1.4.0...1.4.1)

**Other Pull Requests**

- v1.4.1 Merge [\#315](https://github.com/pydock2date/Dock2Date/pull/315) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- v1.4.1 to develop [\#314](https://github.com/pydock2date/Dock2Date/pull/314) ([DirtyCajunRice](https://github.com/DirtyCajunRice))

## [v1.4.0](https://github.com/pydock2date/Dock2Date/tree/v1.4.0) (2019-04-25)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/1.3.1...v1.4.0)

**Implemented enhancements:**

- Make startup notification optional [\#253](https://github.com/pydock2date/Dock2Date/issues/253)

**Fixed bugs:**

- Missing MANIFEST.in file causes pypi install to fail [\#284](https://github.com/pydock2date/Dock2Date/issues/284)
- Healthcheck section not re-applied after container update [\#275](https://github.com/pydock2date/Dock2Date/issues/275)
- docker-compose local and remote tls logger location [\#273](https://github.com/pydock2date/Dock2Date/issues/273)
- Self update errors. Not deleting old self [\#262](https://github.com/pydock2date/Dock2Date/issues/262)
- Dock2Date sets fixed IP addresses [\#254](https://github.com/pydock2date/Dock2Date/issues/254)

**Closed issues:**

- Update apprise to v0.7.4 [\#266](https://github.com/pydock2date/Dock2Date/issues/266) [[cleanup](https://github.com/pydock2date/Dock2Date/labels/cleanup)]
- Docker TLS verify: Does it  support server and client-side auth, or only server-side auth? [\#256](https://github.com/pydock2date/Dock2Date/issues/256) [[documentation](https://github.com/pydock2date/Dock2Date/labels/documentation)]

**Other Pull Requests**

- v1.4.0 Merge [\#299](https://github.com/pydock2date/Dock2Date/pull/299) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Remove Watchtower Reference [\#298](https://github.com/pydock2date/Dock2Date/pull/298) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- v1.4.0 to develop [\#297](https://github.com/pydock2date/Dock2Date/pull/297) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- fixes \#284 [\#296](https://github.com/pydock2date/Dock2Date/pull/296) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Patches [\#295](https://github.com/pydock2date/Dock2Date/pull/295) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Fix healthcheck attr [\#294](https://github.com/pydock2date/Dock2Date/pull/294) ([circa10a](https://github.com/circa10a))
- Patch/catch up [\#271](https://github.com/pydock2date/Dock2Date/pull/271) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Arg skip startup notifications [\#261](https://github.com/pydock2date/Dock2Date/pull/261) ([circa10a](https://github.com/circa10a))
- Revert "add option to skip startup notifications" [\#260](https://github.com/pydock2date/Dock2Date/pull/260) ([circa10a](https://github.com/circa10a))
- add option to skip startup notifications [\#259](https://github.com/pydock2date/Dock2Date/pull/259) ([circa10a](https://github.com/circa10a))

## [1.3.1](https://github.com/pydock2date/Dock2Date/tree/1.3.1) (2019-02-28)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/1.3.0...1.3.1)

**Fixed bugs:**

- Since 1.3.0, docker login fails [\#243](https://github.com/pydock2date/Dock2Date/issues/243)
- Catch Failed self-updates [\#230](https://github.com/pydock2date/Dock2Date/issues/230)

**Other Pull Requests**

- v1.3.1 Merge [\#249](https://github.com/pydock2date/Dock2Date/pull/249) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- v1.3.1 to develop [\#248](https://github.com/pydock2date/Dock2Date/pull/248) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- fix name subscript for \#243 [\#247](https://github.com/pydock2date/Dock2Date/pull/247) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- fixes \#230 and \#243 [\#242](https://github.com/pydock2date/Dock2Date/pull/242) ([DirtyCajunRice](https://github.com/DirtyCajunRice))

## [1.3.0](https://github.com/pydock2date/Dock2Date/tree/1.3.0) (2019-02-25)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/1.2.1...1.3.0)

**Implemented enhancements:**

- Start new container in detached mode [\#222](https://github.com/pydock2date/Dock2Date/pull/222) ([nightvisi0n](https://github.com/nightvisi0n))
- Optimise dockerfile layers [\#218](https://github.com/pydock2date/Dock2Date/pull/218) ([nightvisi0n](https://github.com/nightvisi0n))

**Fixed bugs:**

- Cron scheduled missed following successful runs [\#229](https://github.com/pydock2date/Dock2Date/issues/229)
- Catch attribute.id error [\#226](https://github.com/pydock2date/Dock2Date/issues/226)
- AttachStdout and AttachStderr are not carried over properly [\#221](https://github.com/pydock2date/Dock2Date/issues/221)
- Exception when updating container started with --rm \(autoremove\)  [\#219](https://github.com/pydock2date/Dock2Date/issues/219)
- Issue with Swarm Mode V2 [\#216](https://github.com/pydock2date/Dock2Date/issues/216)
- Fix docker swarm mode [\#227](https://github.com/pydock2date/Dock2Date/pull/227) ([mathcantin](https://github.com/mathcantin))

**Other Pull Requests**

- v1.3.0 Merge [\#241](https://github.com/pydock2date/Dock2Date/pull/241) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- v1.3.0 to develop [\#240](https://github.com/pydock2date/Dock2Date/pull/240) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Catch self update apierror [\#238](https://github.com/pydock2date/Dock2Date/pull/238) ([circa10a](https://github.com/circa10a))
- Catch attribute error [\#237](https://github.com/pydock2date/Dock2Date/pull/237) ([circa10a](https://github.com/circa10a))
- Check for autoremove [\#236](https://github.com/pyDock2Date/Dock2Date/pull/236) ([circa10a](https://github.com/circa10a))
- Add misfire\_grace\_time for cron scheduler [\#234](https://github.com/pyDock2Date/Dock2Date/pull/234) ([circa10a](https://github.com/circa10a))
- Check all services by default on swarm mode [\#228](https://github.com/pyDock2Date/Dock2Date/pull/228) [[cleanup](https://github.com/pyDock2Date/Dock2Date/labels/cleanup)] ([mathcantin](https://github.com/mathcantin))
- remove git in pypi + branch develop + version bump + maintainer\_email [\#214](https://github.com/pyDock2Date/Dock2Date/pull/214) ([DirtyCajunRice](https://github.com/DirtyCajunRice))

## [1.2.1](https://github.com/pydock2date/Dock2Date/tree/1.2.1) (2019-02-14)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/1.2.0...1.2.1)

**Fixed bugs:**

- Broken when no :tag specified  [\#210](https://github.com/pydock2date/Dock2Date/issues/210)

**Other Pull Requests**

- v1.2.1 Merge [\#213](https://github.com/pydock2date/Dock2Date/pull/213) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- v1.2.1 to develop [\#212](https://github.com/pydock2date/Dock2Date/pull/212) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- fixes \#210 [\#211](https://github.com/pydock2date/Dock2Date/pull/211) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- version bump to 1.2.1 + develop branch + twine fix + … [\#209](https://github.com/pydock2date/Dock2Date/pull/209) ([DirtyCajunRice](https://github.com/DirtyCajunRice))

## [1.2.0](https://github.com/pydock2date/Dock2Date/tree/1.2.0) (2019-02-14)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/1.1.2...1.2.0)

**Implemented enhancements:**

- Move "Interval container update" messages to debug log level [\#194](https://github.com/pydock2date/Dock2Date/issues/194)
- \[Feature Request\] Support for Swarm Services [\#178](https://github.com/pydock2date/Dock2Date/issues/178)
- Add Warning for label\_enable not set while using labels\_only [\#202](https://github.com/pydock2date/Dock2Date/pull/202) ([larsderidder](https://github.com/larsderidder))

**Fixed bugs:**

- Change depends\_on logic [\#198](https://github.com/pydock2date/Dock2Date/issues/198)
- Containers relying upon network namespace of a container that gets updated breaks when the parent container is recreated [\#197](https://github.com/pydock2date/Dock2Date/issues/197)
- Exception when trying to update container with complex compose networks [\#196](https://github.com/pydock2date/Dock2Date/issues/196)
- Problem with network IPv4 address carry-over [\#193](https://github.com/pydock2date/Dock2Date/issues/193)
- Monitor Ignored Re-Address + jenkins cleanup [\#191](https://github.com/pydock2date/Dock2Date/pull/191) [[cleanup](https://github.com/pydock2date/Dock2Date/labels/cleanup)] ([DirtyCajunRice](https://github.com/DirtyCajunRice))

**Closed issues:**

- Remove legacy --latest [\#206](https://github.com/pydock2date/Dock2Date/issues/206) [[breaking change](https://github.com/pydock2date/Dock2Date/labels/breaking%20change)] [[cleanup](https://github.com/pydock2date/Dock2Date/labels/cleanup)]
- Add environment variables in Wiki [\#203](https://github.com/pydock2date/Dock2Date/issues/203) [[documentation](https://github.com/pydock2date/Dock2Date/labels/documentation)]
- Slack notifications via webhook not working [\#187](https://github.com/pydock2date/Dock2Date/issues/187)

**Other Pull Requests**

- v1.2.0 Merge [\#208](https://github.com/pydock2date/Dock2Date/pull/208) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- v1.2.0 to develop [\#207](https://github.com/pydock2date/Dock2Date/pull/207) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Patch/tag bug [\#205](https://github.com/pydock2date/Dock2Date/pull/205) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Patch/group 5 [\#201](https://github.com/pydock2date/Dock2Date/pull/201) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Fix bug in user defined network detection [\#200](https://github.com/pydock2date/Dock2Date/pull/200) ([nightvisi0n](https://github.com/nightvisi0n))
- Adjust apscheduler logger [\#199](https://github.com/pydock2date/Dock2Date/pull/199) ([circa10a](https://github.com/circa10a))
- Carry over network config [\#195](https://github.com/pydock2date/Dock2Date/pull/195) ([nightvisi0n](https://github.com/nightvisi0n))
- Jenkins tweaks [\#192](https://github.com/pydock2date/Dock2Date/pull/192) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Swarm + Jenkins [\#188](https://github.com/pydock2date/Dock2Date/pull/188) ([DirtyCajunRice](https://github.com/DirtyCajunRice))

## [1.1.2](https://github.com/pydock2date/Dock2Date/tree/1.1.2) (2019-02-02)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/1.1.1...1.1.2)

**Fixed bugs:**

- No default timezone [\#176](https://github.com/pydock2date/Dock2Date/issues/176)

**Closed issues:**

- cron documentation example update [\#182](https://github.com/pydock2date/Dock2Date/issues/182) [[documentation](https://github.com/pydock2date/Dock2Date/labels/documentation)]

**Other Pull Requests**

- v1.1.2 Merge [\#186](https://github.com/pydock2date/Dock2Date/pull/186) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- v1.1.2 to develop [\#183](https://github.com/pydock2date/Dock2Date/pull/183) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Fix default timezone [\#177](https://github.com/pydock2date/Dock2Date/pull/177) ([circa10a](https://github.com/circa10a))

## [1.1.1](https://github.com/pydock2date/Dock2Date/tree/1.1.1) (2019-02-01)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/1.1.0...1.1.1)

**Implemented enhancements:**

- Support for adding an identifier \(hostname?\) to notifications [\#158](https://github.com/pydock2date/Dock2Date/issues/158)
- Influx config data + ocd cleanup [\#162](https://github.com/pydock2date/Dock2Date/pull/162) [[cleanup](https://github.com/pydock2date/Dock2Date/labels/cleanup)] ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- add cli arg for cron [\#157](https://github.com/pydock2date/Dock2Date/pull/157) ([DirtyCajunRice](https://github.com/DirtyCajunRice))

**Fixed bugs:**

- Dock2Date does not respect MONITOR= [\#166](https://github.com/pydock2date/Dock2Date/issues/166)
- Docker TLS over TCP connections [\#154](https://github.com/pydock2date/Dock2Date/issues/154) [[documentation](https://github.com/pydock2date/Dock2Date/labels/documentation)]
- Patch/group 4 [\#169](https://github.com/pydock2date/Dock2Date/pull/169) [[cleanup](https://github.com/pydock2date/Dock2Date/labels/cleanup)] ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Recheck properly for only non lists [\#164](https://github.com/pydock2date/Dock2Date/pull/164) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- add some missing passthrough info for restart [\#163](https://github.com/pydock2date/Dock2Date/pull/163) ([DirtyCajunRice](https://github.com/DirtyCajunRice))

**Other Pull Requests**

- v1.1.1 Merge [\#173](https://github.com/pydock2date/Dock2Date/pull/173) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- v1.1.1 to develop [\#172](https://github.com/pydock2date/Dock2Date/pull/172) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Patch/group 3 [\#167](https://github.com/pydock2date/Dock2Date/pull/167) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Add hostname to the notifications [\#161](https://github.com/pydock2date/Dock2Date/pull/161) ([tlkamp](https://github.com/tlkamp))
- Patch/group 2 [\#155](https://github.com/pydock2date/Dock2Date/pull/155) ([DirtyCajunRice](https://github.com/DirtyCajunRice))

## [1.1.0](https://github.com/pydock2date/Dock2Date/tree/1.1.0) (2019-01-26)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/1.0.0...1.1.0)

**Implemented enhancements:**

- Notification via Telegram [\#146](https://github.com/pydock2date/Dock2Date/issues/146)
- Add flag to allow a labels\_only condition [\#142](https://github.com/pydock2date/Dock2Date/issues/142)
- DRY\_RUN flag [\#140](https://github.com/pydock2date/Dock2Date/issues/140)
- Notification on startup [\#138](https://github.com/pydock2date/Dock2Date/issues/138)
- Start/Stop containers in sequence [\#106](https://github.com/pydock2date/Dock2Date/issues/106)
- Refactor/notifications with apprise [\#151](https://github.com/pydock2date/Dock2Date/pull/151) [[breaking change](https://github.com/pydock2date/Dock2Date/labels/breaking%20change)] [[cleanup](https://github.com/pydock2date/Dock2Date/labels/cleanup)] [[documentation](https://github.com/pydock2date/Dock2Date/labels/documentation)] ([DirtyCajunRice](https://github.com/DirtyCajunRice))

**Fixed bugs:**

- Catch invalid docker socket config [\#148](https://github.com/pydock2date/Dock2Date/issues/148)
- Explicitly Define true/false [\#141](https://github.com/pydock2date/Dock2Date/issues/141) [[documentation](https://github.com/pydock2date/Dock2Date/labels/documentation)]

**Other Pull Requests**

- v1.1.0 Merge [\#153](https://github.com/pydock2date/Dock2Date/pull/153) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- v1.1.0 to develop [\#152](https://github.com/pydock2date/Dock2Date/pull/152) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Patch/group 1 [\#150](https://github.com/pydock2date/Dock2Date/pull/150) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Add volume for docker socket path [\#144](https://github.com/pydock2date/Dock2Date/pull/144) ([mauvehed](https://github.com/mauvehed))

## [1.0.0](https://github.com/pydock2date/Dock2Date/tree/1.0.0) (2019-01-23)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/0.6.0...1.0.0)

**Implemented enhancements:**

- Stop containers with alternate signal [\#107](https://github.com/pydock2date/Dock2Date/issues/107)
- Docker Socket secure connections [\#105](https://github.com/pydock2date/Dock2Date/issues/105)
- Selectively monitor containers with label [\#104](https://github.com/pydock2date/Dock2Date/issues/104)
- Allow stop-signal label [\#133](https://github.com/pydock2date/Dock2Date/pull/133) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Docker TLS Verify option [\#132](https://github.com/pydock2date/Dock2Date/pull/132) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- add label priority feature for watch/ignore. Addresses \#104 [\#121](https://github.com/pydock2date/Dock2Date/pull/121) ([DirtyCajunRice](https://github.com/DirtyCajunRice))

**Fixed bugs:**

- Unexpected docker API causes program to quit ‘500 Server Error: Internal Server Error’ [\#130](https://github.com/pydock2date/Dock2Date/issues/130)
- Error tag handling under the registry with port [\#129](https://github.com/pydock2date/Dock2Date/issues/129)
- a fatal error when none tag image [\#122](https://github.com/pydock2date/Dock2Date/issues/122)
- Bug/ignore logic [\#135](https://github.com/pydock2date/Dock2Date/pull/135) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Bug/registry logic [\#131](https://github.com/pydock2date/Dock2Date/pull/131) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- catch no tags in get\_running [\#124](https://github.com/pydock2date/Dock2Date/pull/124) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- fixed logic for latest vs develop, and added -f to specify file [\#119](https://github.com/pydock2date/Dock2Date/pull/119) ([DirtyCajunRice](https://github.com/DirtyCajunRice))

**Closed issues:**

- Missing docker-compose.yml from documentation [\#120](https://github.com/pydock2date/Dock2Date/issues/120) [[documentation](https://github.com/pydock2date/Dock2Date/labels/documentation)]
- Wiki usage docs reference old argument names [\#115](https://github.com/pydock2date/Dock2Date/issues/115) [[documentation](https://github.com/pydock2date/Dock2Date/labels/documentation)]

**Other Pull Requests**

- v1.0.0 Merge [\#137](https://github.com/pydock2date/Dock2Date/pull/137) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- v1.0.0 to develop [\#136](https://github.com/pydock2date/Dock2Date/pull/136) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Clean old legacy files [\#134](https://github.com/pydock2date/Dock2Date/pull/134) [[cleanup](https://github.com/pydock2date/Dock2Date/labels/cleanup)] ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Cleanup/qemu logic [\#128](https://github.com/pydock2date/Dock2Date/pull/128) [[cleanup](https://github.com/pydock2date/Dock2Date/labels/cleanup)] ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- fix readme wording for monitoring remote hosts [\#126](https://github.com/pydock2date/Dock2Date/pull/126) [[documentation](https://github.com/pydock2date/Dock2Date/labels/documentation)] ([circa10a](https://github.com/circa10a))

## [0.6.0](https://github.com/pydock2date/Dock2Date/tree/0.6.0) (2019-01-17)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/0.5.0...0.6.0)

**Implemented enhancements:**

- Support multi-architecture Docker images [\#78](https://github.com/pydock2date/Dock2Date/issues/78)
- Mail notification [\#59](https://github.com/pydock2date/Dock2Date/issues/59)
- Multi architecture docker [\#110](https://github.com/pydock2date/Dock2Date/pull/110) ([circa10a](https://github.com/circa10a))
- added logo to readme [\#109](https://github.com/pydock2date/Dock2Date/pull/109) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Feature/Dock2Date self\_update [\#103](https://github.com/pydock2date/Dock2Date/pull/103) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- add version cli arg [\#100](https://github.com/pydock2date/Dock2Date/pull/100) ([circa10a](https://github.com/circa10a))
- added email notifications. Addresses \#59 [\#97](https://github.com/pydock2date/Dock2Date/pull/97) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Documentation [\#96](https://github.com/pydock2date/Dock2Date/pull/96) ([DirtyCajunRice](https://github.com/DirtyCajunRice))

**Fixed bugs:**

- Ignore not working as expected [\#98](https://github.com/pydock2date/Dock2Date/issues/98)
- specify for specificity! [\#114](https://github.com/pydock2date/Dock2Date/pull/114) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- manifesting failures [\#113](https://github.com/pydock2date/Dock2Date/pull/113) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- sigh. [\#112](https://github.com/pydock2date/Dock2Date/pull/112) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Multiarch/fine tuning [\#111](https://github.com/pydock2date/Dock2Date/pull/111) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- catch index error and account for shared images, x [\#102](https://github.com/pydock2date/Dock2Date/pull/102) ([circa10a](https://github.com/circa10a))
- add monitor/ignore to list sanity check. Fixes \#98 [\#99](https://github.com/pydock2date/Dock2Date/pull/99) ([DirtyCajunRice](https://github.com/DirtyCajunRice))

**Other Pull Requests**

- v0.6.0 to develop [\#118](https://github.com/pydock2date/Dock2Date/pull/118) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- v0.6.0 Merge [\#117](https://github.com/pydock2date/Dock2Date/pull/117) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- add changelog formatting and fix all labels going back to 1 [\#116](https://github.com/pydock2date/Dock2Date/pull/116) [[documentation](https://github.com/pydock2date/Dock2Date/labels/documentation)] ([DirtyCajunRice](https://github.com/DirtyCajunRice))

## [0.5.0](https://github.com/pydock2date/Dock2Date/tree/0.5.0) (2019-01-13)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/0.4.3...0.5.0)

**Implemented enhancements:**

- Auto discover slack/discord notifications in WEBHOOK\_URLS [\#83](https://github.com/pydock2date/Dock2Date/issues/83)
- Add to schedule logic run now [\#75](https://github.com/pydock2date/Dock2Date/issues/75)
- add pushover functionality. Finishes other half of \#80 [\#93](https://github.com/pydock2date/Dock2Date/pull/93) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- add keep\_alive url for healthchecks. Addresses half of \#80 [\#89](https://github.com/pydock2date/Dock2Date/pull/89) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- changed webhook json to auto-deciding + fixed RUN\_ONCE no underscore [\#86](https://github.com/pydock2date/Dock2Date/pull/86) ([DirtyCajunRice](https://github.com/DirtyCajunRice))
- Refactor [\#79](https://github.com/pydock2date/Dock2Date/pull/79) ([DirtyCajunRice](https://github.com/DirtyCajunRice))

**Fixed bugs:**

- Fix log level case sensitivity [\#82](https://github.com/pydock2date/Dock2Date/issues/82)
- Invalid URL 'h': No schema supplied. Perhaps you meant http://h? [\#76](https://github.com/pydock2date/Dock2Date/issues/76)
- Installation via pip fails [\#73](https://github.com/pydock2date/Dock2Date/issues/73)
- Added try except [\#95](https://github.com/pydock2date/Dock2Date/pull/95) ([circa10a](https://github.com/circa10a))
- Fix dockerfile [\#92](https://github.com/pydock2date/Dock2Date/pull/92) ([circa10a](https://github.com/circa10a))
- use Dock2Date script in dockerfile [\#91](https://github.com/pydock2date/Dock2Date/pull/91) ([circa10a](https://github.com/circa10a))
- fix deploy script to push git tags [\#90](https://github.com/pydock2date/Dock2Date/pull/90) ([circa10a](https://github.com/circa10a))
- change pypi travis username [\#88](https://github.com/pydock2date/Dock2Date/pull/88) ([circa10a](https://github.com/circa10a))
- install flake8 for travis, run on appropriate directories [\#87](https://github.com/pydock2date/Dock2Date/pull/87) ([circa10a](https://github.com/circa10a))
- Removed old test related items, removed the need for duplicate bin sc… [\#85](https://github.com/pydock2date/Dock2Date/pull/85) ([circa10a](https://github.com/circa10a))
- change loglevel to use upper\(\) [\#84](https://github.com/pydock2date/Dock2Date/pull/84) ([circa10a](https://github.com/circa10a))
- Prometheus bind fix, org rename [\#81](https://github.com/pydock2date/Dock2Date/pull/81) ([circa10a](https://github.com/circa10a))

## [0.4.3](https://github.com/pydock2date/Dock2Date/tree/0.4.3) (2019-01-09)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/0.4.2...0.4.3)

**Implemented enhancements:**

- grafana to metrics/prometheus endpoint [\#74](https://github.com/pydock2date/Dock2Date/issues/74)
- add aarch64 docker image [\#77](https://github.com/pydock2date/Dock2Date/pull/77) ([circa10a](https://github.com/circa10a))

## [0.4.2](https://github.com/pydock2date/Dock2Date/tree/0.4.2) (2019-01-08)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/0.4.1...0.4.2)

**Implemented enhancements:**

- Add autopep8 to the pre-merge checks [\#30](https://github.com/pydock2date/Dock2Date/issues/30)

## [0.4.1](https://github.com/pydock2date/Dock2Date/tree/0.4.1) (2018-12-30)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/0.4.0...0.4.1)

**Implemented enhancements:**

- Pre merge code quality checks [\#72](https://github.com/pydock2date/Dock2Date/pull/72) ([circa10a](https://github.com/circa10a))

## [0.4.0](https://github.com/pydock2date/Dock2Date/tree/0.4.0) (2018-12-30)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/0.3.7...0.4.0)

**Implemented enhancements:**

- Slack notification  [\#61](https://github.com/pydock2date/Dock2Date/issues/61)
- Webhook notifications [\#71](https://github.com/pydock2date/Dock2Date/pull/71) ([circa10a](https://github.com/circa10a))

## [0.3.7](https://github.com/pydock2date/Dock2Date/tree/0.3.7) (2018-12-26)
[Full Changelog](https://github.com/pyDock2Date/Dock2Date/compare/0.3.6...0.3.7)

**Implemented enhancements:**

- Timezone Support [\#68](https://github.com/pyDock2Date/Dock2Date/issues/68)
- Add output to log at container start [\#66](https://github.com/pyDock2Date/Dock2Date/issues/66)
- Enable Timezone Configuration [\#69](https://github.com/pyDock2Date/Dock2Date/pull/69) ([circa10a](https://github.com/circa10a))

## [0.3.6](https://github.com/pyDock2Date/Dock2Date/tree/0.3.6) (2018-12-21)
[Full Changelog](https://github.com/pyDock2Date/Dock2Date/compare/0.3.5...0.3.6)

**Implemented enhancements:**

- print Dock2Date configuration on startup [\#67](https://github.com/pyDock2Date/Dock2Date/pull/67) ([circa10a](https://github.com/circa10a))

## [0.3.5](https://github.com/pyDock2Date/Dock2Date/tree/0.3.5) (2018-12-20)
[Full Changelog](https://github.com/pyDock2Date/Dock2Date/compare/0.3.4...0.3.5)

**Implemented enhancements:**

- Raspberry Pi compatible docker image [\#62](https://github.com/pyDock2Date/Dock2Date/issues/62)
- Scheduling docs [\#65](https://github.com/pyDock2Date/Dock2Date/pull/65) ([circa10a](https://github.com/circa10a))

## [0.3.4](https://github.com/pydock2date/Dock2Date/tree/0.3.4) (2018-12-19)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/0.3.3...0.3.4)

**Implemented enhancements:**

- Rpi docker image [\#64](https://github.com/pydock2date/Dock2Date/pull/64) ([circa10a](https://github.com/circa10a))

## [0.3.3](https://github.com/pydock2date/Dock2Date/tree/0.3.3) (2018-11-29)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/0.3.2...0.3.3)

**Implemented enhancements:**

- add docs, bump version [\#58](https://github.com/pydock2date/Dock2Date/pull/58) ([circa10a](https://github.com/circa10a))

**Fixed bugs:**

- Problem accessing private registry [\#55](https://github.com/pydock2date/Dock2Date/issues/55)

**Closed issues:**

- Q: Add config file? [\#46](https://github.com/pydock2date/Dock2Date/issues/46) [[documentation](https://github.com/pydock2date/Dock2Date/labels/documentation)]

## [0.3.2](https://github.com/pydock2date/Dock2Date/tree/0.3.2) (2018-11-28)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/0.3.1...0.3.2)

**Fixed bugs:**

- unrecognized arguments [\#52](https://github.com/pydock2date/Dock2Date/issues/52)
- Fix config json [\#56](https://github.com/pydock2date/Dock2Date/pull/56) ([circa10a](https://github.com/circa10a))

## [0.3.1](https://github.com/pydock2date/Dock2Date/tree/0.3.1) (2018-11-16)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/0.3.0...0.3.1)

**Implemented enhancements:**

- Add Prometheus endpoint [\#23](https://github.com/pydock2date/Dock2Date/issues/23) [[hacktoberfest](https://github.com/pydock2date/Dock2Date/labels/hacktoberfest)]

**Fixed bugs:**

- fix bind address bug [\#53](https://github.com/pydock2date/Dock2Date/pull/53) ([circa10a](https://github.com/circa10a))

## [0.3.0](https://github.com/pydock2date/Dock2Date/tree/0.3.0) (2018-11-15)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/0.2.3...0.3.0)

**Implemented enhancements:**

- Q: continue to update to latest or same tag [\#43](https://github.com/pydock2date/Dock2Date/issues/43)
- Metrics [\#51](https://github.com/pydock2date/Dock2Date/pull/51) ([circa10a](https://github.com/circa10a))
- Disable pip cache in Dockerfile [\#50](https://github.com/pydock2date/Dock2Date/pull/50) ([Strayer](https://github.com/Strayer))

## [0.2.3](https://github.com/pydock2date/Dock2Date/tree/0.2.3) (2018-11-08)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/0.2.2...0.2.3)

**Implemented enhancements:**

- Keep tags [\#48](https://github.com/pydock2date/Dock2Date/pull/48) ([circa10a](https://github.com/circa10a))

## [0.2.2](https://github.com/pydock2date/Dock2Date/tree/0.2.2) (2018-11-03)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/0.2.1...0.2.2)

**Implemented enhancements:**

- Add ability to ignore select containers [\#35](https://github.com/pydock2date/Dock2Date/issues/35)
- Ignore containers [\#45](https://github.com/pydock2date/Dock2Date/pull/45) ([tlkamp](https://github.com/tlkamp))
- Update setup.py, travis param [\#42](https://github.com/pydock2date/Dock2Date/pull/42) ([circa10a](https://github.com/circa10a))

## [0.2.1](https://github.com/pydock2date/Dock2Date/tree/0.2.1) (2018-10-28)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/0.1.3...0.2.1)

**Implemented enhancements:**

- Option precedence [\#32](https://github.com/pydock2date/Dock2Date/issues/32)
- Add Dock2Date to the user's path automagically [\#28](https://github.com/pydock2date/Dock2Date/issues/28)
- Deploy to Pypi [\#41](https://github.com/pydock2date/Dock2Date/pull/41) ([circa10a](https://github.com/circa10a))
- Add setup.py [\#40](https://github.com/pydock2date/Dock2Date/pull/40) ([tlkamp](https://github.com/tlkamp))
- change branch to master [\#39](https://github.com/pydock2date/Dock2Date/pull/39) ([circa10a](https://github.com/circa10a))
- Move api client out of cli.py [\#38](https://github.com/pydock2date/Dock2Date/pull/38) ([tlkamp](https://github.com/tlkamp))
- Handle the exceptions better in cli.py [\#36](https://github.com/pydock2date/Dock2Date/pull/36) ([tlkamp](https://github.com/tlkamp))

**Closed issues:**

- \[question\] network\_mode: "service:XXX" ? [\#33](https://github.com/pydock2date/Dock2Date/issues/33) [[documentation](https://github.com/pydock2date/Dock2Date/labels/documentation)]

**Other Pull Requests**

- Remove global hosts variable [\#37](https://github.com/pydock2date/Dock2Date/pull/37) [[cleanup](https://github.com/pydock2date/Dock2Date/labels/cleanup)] ([tlkamp](https://github.com/tlkamp))
- update docs [\#34](https://github.com/pydock2date/Dock2Date/pull/34) [[documentation](https://github.com/pydock2date/Dock2Date/labels/documentation)] ([circa10a](https://github.com/circa10a))

## [0.1.3](https://github.com/pydock2date/Dock2Date/tree/0.1.3) (2018-10-25)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/0.1.2...0.1.3)

**Implemented enhancements:**

- Make CLI expose fewer globals, formatting [\#31](https://github.com/pydock2date/Dock2Date/pull/31) ([tlkamp](https://github.com/tlkamp))

## [0.1.2](https://github.com/pydock2date/Dock2Date/tree/0.1.2) (2018-10-24)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/0.1.1...0.1.2)

**Implemented enhancements:**

- Rewrite script to use vendor packages if possible [\#25](https://github.com/pydock2date/Dock2Date/pull/25) ([dannysauer](https://github.com/dannysauer))
- Improve URL matching Regex [\#24](https://github.com/pydock2date/Dock2Date/pull/24) ([dannysauer](https://github.com/dannysauer))
- Add environment files to the project for those working with Conda [\#22](https://github.com/pydock2date/Dock2Date/pull/22) ([tlkamp](https://github.com/tlkamp))

**Other Pull Requests**

- regex changes, cli cleanup. [\#29](https://github.com/pydock2date/Dock2Date/pull/29) [[cleanup](https://github.com/pydock2date/Dock2Date/labels/cleanup)] ([circa10a](https://github.com/circa10a))
- Clean up cli.py [\#27](https://github.com/pydock2date/Dock2Date/pull/27) [[cleanup](https://github.com/pydock2date/Dock2Date/labels/cleanup)] ([tlkamp](https://github.com/tlkamp))

## [0.1.1](https://github.com/pydock2date/Dock2Date/tree/0.1.1) (2018-10-21)
[Full Changelog](https://github.com/pydock2date/Dock2Date/compare/0.1.0...0.1.1)

## [0.1.0](https://github.com/pydock2date/Dock2Date/tree/0.1.0) (2018-10-21)
**Implemented enhancements:**

- account for environment variables [\#19](https://github.com/pydock2date/Dock2Date/issues/19)
- Support private repos [\#10](https://github.com/pydock2date/Dock2Date/issues/10)
- Deploy to pypi [\#5](https://github.com/pydock2date/Dock2Date/issues/5)
- Create travis build [\#4](https://github.com/pydock2date/Dock2Date/issues/4)
- Rewrite new container class [\#3](https://github.com/pydock2date/Dock2Date/issues/3)
- Write Unit Tests [\#2](https://github.com/pydock2date/Dock2Date/issues/2)
- Add CLI Args [\#1](https://github.com/pydock2date/Dock2Date/issues/1)
- added support for private registries [\#12](https://github.com/pydock2date/Dock2Date/pull/12) ([circa10a](https://github.com/circa10a))
- Torpus cli args [\#11](https://github.com/pydock2date/Dock2Date/pull/11) ([Torpus](https://github.com/Torpus))
- single client [\#9](https://github.com/pydock2date/Dock2Date/pull/9) ([circa10a](https://github.com/circa10a))
- the less code the better [\#8](https://github.com/pydock2date/Dock2Date/pull/8) ([circa10a](https://github.com/circa10a))
- Initial stuff [\#6](https://github.com/pydock2date/Dock2Date/pull/6) ([circa10a](https://github.com/circa10a))

**Closed issues:**

- Create good docs [\#7](https://github.com/pydock2date/Dock2Date/issues/7) [[documentation](https://github.com/pydock2date/Dock2Date/labels/documentation)]

**Other Pull Requests**

- Docs [\#21](https://github.com/pydock2date/Dock2Date/pull/21) [[documentation](https://github.com/pydock2date/Dock2Date/labels/documentation)] ([circa10a](https://github.com/circa10a))
- Tests [\#20](https://github.com/pydock2date/Dock2Date/pull/20) [[cleanup](https://github.com/pydock2date/Dock2Date/labels/cleanup)] ([circa10a](https://github.com/circa10a))
- Add travis [\#18](https://github.com/pydock2date/Dock2Date/pull/18) [[cleanup](https://github.com/pydock2date/Dock2Date/labels/cleanup)] ([circa10a](https://github.com/circa10a))
- Tests [\#17](https://github.com/pydock2date/Dock2Date/pull/17) [[cleanup](https://github.com/pydock2date/Dock2Date/labels/cleanup)] ([circa10a](https://github.com/circa10a))
- Tests [\#16](https://github.com/pydock2date/Dock2Date/pull/16) [[cleanup](https://github.com/pydock2date/Dock2Date/labels/cleanup)] ([circa10a](https://github.com/circa10a))
- Tests [\#15](https://github.com/pydock2date/Dock2Date/pull/15) [[cleanup](https://github.com/pydock2date/Dock2Date/labels/cleanup)] ([circa10a](https://github.com/circa10a))
- Tests [\#14](https://github.com/pydock2date/Dock2Date/pull/14) [[cleanup](https://github.com/pydock2date/Dock2Date/labels/cleanup)] ([circa10a](https://github.com/circa10a))
- Tests [\#13](https://github.com/pydock2date/Dock2Date/pull/13) [[cleanup](https://github.com/pydock2date/Dock2Date/labels/cleanup)] ([circa10a](https://github.com/circa10a))
