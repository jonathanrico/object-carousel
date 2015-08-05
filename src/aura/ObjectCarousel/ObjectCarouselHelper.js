({

    getRecords : function(component){

        var a = component.get("c.getRecords");

        a.setCallback(this, function(action) {
            if (action.getState() === "SUCCESS") {
                res = action.getReturnValue();
                component.set('v.records',res);
                component.set('v.currentRecord', res[0]);
                component.set('v.currentRecordIndex', 0);
            } else {
                alert('Unable to fetch Object records');
            }
        });
        $A.enqueueAction(a);

    },

    moveToNextRecord : function(component){
        var records = component.get('v.records');
        var currentIndex = component.get('v.currentRecordIndex');
        if(currentIndex >= records.length-1){
            currentIndex = 0;
        }else{
            currentIndex++;
        }
        component.set('v.currentRecord', records[currentIndex]);
        component.set('v.currentRecordIndex', currentIndex);
    },

    moveToPreviousRecord : function(component){
        var records = component.get('v.records');
        var currentIndex = component.get('v.currentRecordIndex');
        if(currentIndex <= 0){
            currentIndex = records.length-1;
        }else{
            currentIndex--;
        }
        component.set('v.currentRecord', records[currentIndex]);
        component.set('v.currentRecordIndex', currentIndex);
    },

    goToRecord : function(component){
        var currentRecord = component.get('v.currentRecord');
        var urlEvent = $A.get("e.force:navigateToSObject");
        urlEvent.setParams({
            "recordId": currentRecord.Id
        });
        urlEvent.fire();
    },

    startAutoPlay : function(component){
        var autoPlay = component.get('v.autoplay');
        if(autoPlay == true || autoPlay == 'true'){
            var moveFunction = this.moveToNextRecord;
            var autoPlay = function () {
            var timeOutId = setTimeout(function () {
                    moveFunction(component);
                    autoPlay();
              	}, 5000);
            	component.set('v.timerId', timeOutId);
            };
            autoPlay();
        }
    },

    stopAutoPlay : function(component){
        var timeOutId = component.get('v.timerId');
        if(timeOutId){
            clearTimeout(timeOutId);
        }
    }

})
