import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { RoutinesService } from '../routine/routines.service';
import { CreateRoutineDto, UpdateRoutineDto } from './dto/routines.dto';

@Controller('routines')
export class RoutinesController {
  constructor(private readonly routinesService: RoutinesService) {}

  @Post()
  create(@Body() body: CreateRoutineDto) {
    return this.routinesService.create(body);
  }

  @Get()
  findAll() {
    return this.routinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routinesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateRoutineDto) {
    return this.routinesService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.routinesService.delete(id);
  }
}
