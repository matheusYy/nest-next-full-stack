import { Controller, Get, Param, ParseIntPipe, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { map, toArray } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/')
  @Render('index')
  home() {
    return {};
  }
  @Get(':id')
  @Render('[id]')
  public userInfo(@Param('id') id: string) {
    return {};
  }
  @Get('/api/users')
  public listUserInfo() {
    return this.appService.getUsersInfo();
  }

  @Get('/api/users/:id')
  public getUserId(@Param('id', new ParseIntPipe()) id: number) {
    return this.appService.getUserInfo(id);
  }
  @Get('server/info')
  public getInfoPage() {
    return {
      info: 'info direto do nestJs mais alguma coisa',
      name: 'mauricio',
    };
  }
}
