public with sharing class ObjectCarouselCtrl{

    @AuraEnabled
    public static List<SObject> getRecords(){
      return [select Id
                    ,Name
                    ,Type
                    ,Industry
                    ,Phone
                    ,Account_image_url__c
                    ,Vendor_Specialty1__c
                    from Account
                    where RecordType.DeveloperName = 'Vendor'
                    order by CreatedDate desc
                    limit 10];
    }

}
