window.jest_html_reporters_callback__({"numFailedTestSuites":1,"numFailedTests":0,"numPassedTestSuites":0,"numPassedTests":0,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":1,"numTodoTests":0,"numTotalTestSuites":1,"numTotalTests":0,"startTime":1687846027634,"success":false,"testResults":[{"numFailingTests":0,"numPassingTests":0,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":0,"runtime":0,"slow":false,"start":0},"testFilePath":"C:\\Users\\82106\\OneDrive\\바탕 화면\\CodeBlue\\src\\hospitals\\service\\hospitals.service.spec.ts","failureMessage":"  \u001b[1m● \u001b[22mTest suite failed to run\n\n    \u001b[96msrc/hospitals/service/hospitals.service.spec.ts\u001b[0m:\u001b[93m110\u001b[0m:\u001b[93m37\u001b[0m - \u001b[91merror\u001b[0m\u001b[90m TS2551: \u001b[0mProperty 'getLocalHospitals' does not exist on type 'HospitalsService'. Did you mean 'getHospitals'?\n\n    \u001b[7m110\u001b[0m       expect(await hospitalsService.getLocalHospitals(site)).toBe(hospitals);\n    \u001b[7m   \u001b[0m \u001b[91m                                    ~~~~~~~~~~~~~~~~~\u001b[0m\n\n      \u001b[96msrc/hospitals/service/hospitals.service.ts\u001b[0m:\u001b[93m28\u001b[0m:\u001b[93m9\u001b[0m\n        \u001b[7m28\u001b[0m   async getHospitals(): Promise<Hospitals[]> {\n        \u001b[7m  \u001b[0m \u001b[96m        ~~~~~~~~~~~~\u001b[0m\n        'getHospitals' is declared here.\n    \u001b[96msrc/hospitals/service/hospitals.service.spec.ts\u001b[0m:\u001b[93m118\u001b[0m:\u001b[93m37\u001b[0m - \u001b[91merror\u001b[0m\u001b[90m TS2551: \u001b[0mProperty 'getNationHospitals' does not exist on type 'HospitalsService'. Did you mean 'getHospitals'?\n\n    \u001b[7m118\u001b[0m       expect(await hospitalsService.getNationHospitals()).toBe(hospitals);\n    \u001b[7m   \u001b[0m \u001b[91m                                    ~~~~~~~~~~~~~~~~~~\u001b[0m\n\n      \u001b[96msrc/hospitals/service/hospitals.service.ts\u001b[0m:\u001b[93m28\u001b[0m:\u001b[93m9\u001b[0m\n        \u001b[7m28\u001b[0m   async getHospitals(): Promise<Hospitals[]> {\n        \u001b[7m  \u001b[0m \u001b[96m        ~~~~~~~~~~~~\u001b[0m\n        'getHospitals' is declared here.\n","testResults":[]}],"config":{"bail":0,"changedFilesWithAncestor":false,"ci":false,"collectCoverage":false,"collectCoverageFrom":["**/*.(t|j)s"],"coverageDirectory":"C:\\Users\\82106\\OneDrive\\바탕 화면\\CodeBlue\\coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":7,"noStackTrace":false,"nonFlagArgs":["hospitals.service.spec.ts"],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"openHandlesTimeout":1000,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["C:\\Users\\82106\\OneDrive\\바탕 화면\\CodeBlue\\node_modules\\jest-html-reporters\\index.js",{"publicPath":"./test/html-jest-report","filename":"report.html","includeFailureMsg":true}]],"rootDir":"C:\\Users\\82106\\OneDrive\\바탕 화면\\CodeBlue\\src","runTestsByPath":false,"seed":-1645345269,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"hospitals.service.spec.ts","testSequencer":"C:\\Users\\82106\\OneDrive\\바탕 화면\\CodeBlue\\node_modules\\@jest\\test-sequencer\\build\\index.js","updateSnapshot":"new","useStderr":false,"verbose":true,"watch":false,"watchAll":false,"watchman":true,"workerThreads":false},"endTime":1687846031875,"_reporterOptions":{"publicPath":"./test/html-jest-report","filename":"report.html","expand":false,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false,"includeFailureMsg":true},"logInfoMapping":{},"attachInfos":{}})