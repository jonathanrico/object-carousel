Object Carousel
===

Lightning Component for displaying SObject records

---
###Developers :

#### How to deploy the application :

1. Make sure ant is installed in your local box
2. Update your credentials

Make a copy of the sample-sfdc-build.properties file and rename it to "sfdc-build.properties"

#### How to deploy the application using Ant :

1. Update the local-build.properties with your credentials.
   **NOTE: If you're building against a Sandbox or Production environment, set the "guestLicense" property to empty**
2. Navigate to the build folder using the terminal or command prompt
3. If you're using **OS X** run the following command : `sh build.sh`
5. If you want to run the ant target directly use the following command : `ant deploy -DrunAllTests=false -DcheckOnly=false
