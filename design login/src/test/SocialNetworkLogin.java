package test;

public class SocialNetworkLogin {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		  LoginFactory log = new LoginFactory();
	      Login login1 = log.getSite("Facebook");
	      login1.login();
	      Login login2 = log.getSite("Twitter");
	      login2.login();
	      Login login3 = log.getSite("Google");
	      login3.login();
	      Login login4 = log.getSite("Linkedin");
	      login4.login();
	}

}
