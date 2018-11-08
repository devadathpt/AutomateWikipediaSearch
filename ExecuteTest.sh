#!/bin/bash
mvn install test -Dcucumber.options="src/test/resources/feature/SearchString.feature --tags @Test"
sleep 5
