package test;

public class LoginFactory {
	   public Login getSite(String socialNetwork){
		      if(socialNetwork == null){
		         return null;
		      }		
		      if(socialNetwork.equalsIgnoreCase("Facebook")){
		         return new Facebook();
		         
		      } else if(socialNetwork.equalsIgnoreCase("Twitter")){
		         return new Twitter();
		         
		      } else if(socialNetwork.equalsIgnoreCase("Google")){
		         return new Google();
		      }
		       else if(socialNetwork.equalsIgnoreCase("Linkedin")){
		         return new Linkedin();
		      }
		      
		      return null;
		   }
}
