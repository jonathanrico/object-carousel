({
    doInit : function(component, event, helper) {
        helper.getRecords(component);
    },

    nextRecord : function(component, event, helper){
        helper.moveToNextRecord(component);
    },

    previousRecord : function(component, event, helper){
        helper.moveToPreviousRecord(component);
    },

    goToRecord : function(component, event, helper){
        helper.goToRecord(component);
    }
})
