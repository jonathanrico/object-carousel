public with sharing class ObjectCarouselCtrl{

    @AuraEnabled
    public static List<SObject> getRecords(){
      return [select Id
                    ,Name
                    ,Type
                    ,Industry
                    ,Phone
                    from Account limit 10];
    }

}
