![Snyk logo](https://snyk.io/style/asset/logo/snyk-print.svg)

***

Snyk helps you find, fix and monitor for known vulnerabilities in your dependencies, both on an ad hoc basis and as part of your CI (Build) system.

## Snyk Gradle CLI Plugin

This plugin provides dependency metadata for Gradle projects that use `gradle` and have a `build.gradle` file.

Supported Snyk command line arguments:

* `--gradle-sub-project=foo` return dependencies for a specific subproject (by default, return only the
  dependencies for the top-level project)

Additional command line arguments to Gradle can be provided after `--`, for example:
  
* `--all-sub-projects` for "multi project" configurations, test all
                       sub-projects.
* `--configuration-matching=<string>`
                       Resolve dependencies using only configuration(s) that
                       match the provided Java regular expression, e.g.
                       '^releaseRuntimeClasspath$'.
* `--configuration-attributes=<string>`
                       Select certain values of configuration attributes to
                       resolve the dependencies. E.g.:
                       'buildtype:release,usage:java-runtime'

## Under the hood

See `lib/init.gradle` for the Groovy script injected in Gradle builds to gather and resolve the dependencies.
