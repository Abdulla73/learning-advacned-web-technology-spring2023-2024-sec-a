import { RegistrationService } from './../registration/registration.service';
import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly RegistrationService: RegistrationService,
    
  ) {
   
  }
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.RegistrationService.findOne(email);
    if (user && await compare(password, user.user_password)) {
      const { user_password, ...result } = user; 
      return result;
    }
    return this.validateUser;
  }

  

}