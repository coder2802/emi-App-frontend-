import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username:'',
    password:''
  }

  constructor(
    private snack:MatSnackBar ,
    private loginService:LoginService,
    private router:Router
    
    ) { }

  ngOnInit(): void {
  }

    formSubmit()
    {
      if(this.loginData.username.trim()==''  || this.loginData.username==null )
      {

        this.snack.open("username is required" ,"ok" ,{
          duration:3000
        })
        return;
      }

      if(this.loginData.password.trim()==''  || this.loginData.password==null )
      {

        this.snack.open("password is required" ,"ok" ,{
          duration:3000
        })
        return;
      }

      //request server to generte token

      this.loginService.generateToken(this.loginData).subscribe(
        (data:any)=>
        {
          console.log(data)

          //login
          //save token 
          this.loginService.loginUser(data.token)

          this.loginService.getCurrentUser().subscribe(
            (user:any)=>
            {
              this.loginService.setUser(user)
              console.log(user)


              //redirect on basis of role
              if(this.loginService.getUserRole()=="ADMIN" || this.loginService.getUserRole()=="Admin")
              {
                
                //admin dashboard
                //window.location.href="/admin"
                this.router.navigate(['admin']);
              }
              else if(this.loginService.getUserRole()=="Normal" || this.loginService.getUserRole()=="NORMAL")
              {

                //normal user dashboard
              window.location.href="/admin"
              }
              else{
                this.loginService.logout();

              }


            })
           

        },
        (error:any)=>
        {
          this.snack.open("Invalid Details" ,"ok" ,{
            duration:3000,
            
          })

         
     
          console.log(error);
        }
      )
    }

}
