(function(a,d,g){function b(b){try{if(!d||!d.enabled)return{evaluationResult:{hasError:!0,error:"DCTK_NOT_READY_OR_UNAVAILABLE"}};var h=d.logging.pageName;if(h!==b)return{evaluationResult:{hasError:!0,error:"EXPERIMENT_NOT_TARGETED_FOR_CURRENT_PAGE "+h}}}catch(a){return{evaluationResult:{hasError:!0,error:a.message}}}return{evaluationResult:{hasError:!1,error:"NO_ERROR"}}}a.loyalty=a.loyalty||{};a.loyalty.experimenthelpers={evaluateExperimentOptions:function(a){return void 0!==a.pageName?b(a.pageName):{evaluationResult:{hasError:!1,error:"NO_ERROR"}}}}})(window,window.dctk);(function(a,d,g,b){var k=function(a,l,e){a.hasError?e({bucketValue:b,evaluationResult:a}):d&&d.enabled&&"function"===typeof d.evaluateExperimentAndLog?d.evaluateExperimentAndLog({id:l,callback:function(c){c!==b&&(c.error!==b?e({bucketValue:b,evaluationResult:{hasError:!0,error:c.error.message}}):e({bucketValue:c.value,evaluationResult:a}))}}):e({bucketValue:b,evaluationResult:{hasError:!0,error:"DCTK_NOT_READY_OR_UNAVAILABLE"}})};a.loyalty=a.loyalty||{};a.loyalty.experimentrecorder={evaluateAndRecord:function(a,d,e,c){if(c!==b&&(c=g.experimenthelpers.evaluateExperimentOptions(c),c.evaluationResult.hasError)){e({bucketValue:b,evaluationResult:c.evaluationResult});return}var f="";$.each(d,function(a,b){f+="\x26preconditions\x3d"+b});$.ajax({dataType:"json",url:"/loyalty/evaluatePreconditions?abacusId\x3d"+a+f,timeout:5E3,success:function(b){k(b,a,e)},error:function(a,d,c){e({bucketValue:b,evaluationResult:{hasError:!0,error:c}})}})}}})(window,window.dctk,window.loyalty);
//# sourceMappingURL=experimentRecorder.js.map