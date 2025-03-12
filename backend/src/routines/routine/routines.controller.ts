import {
  Controller,
  Get,
  Post,
  Put,
  UseGuards,
  Delete,
  Param,
  Request,
  Body,
} from '@nestjs/common';
import { RoutinesService } from '../routine/routines.service';
import { CreateRoutineDto, UpdateRoutineDto } from './dto/routines.dto';
import { Routine } from '../schema/routine.model';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiResponse,
} from '@nestjs/swagger';


@ApiTags('Routines')
@Controller('routines')
export class RoutinesController {
  constructor(private readonly routinesService: RoutinesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear nueva rutina' })
  @ApiBody({ type: CreateRoutineDto })
  @ApiResponse({ status: 201, description: 'Rutina creada exitosamente' })
  create(@Body() body: CreateRoutineDto) {
    return this.routinesService.create(body);
  }

  @Get('/my-routines')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Obtener las rutinas del usuario logueado' })
  @ApiResponse({
    status: 200,
    description: 'Lista de rutinas obtenida con éxito',
  })
  @ApiResponse({ status: 401, description: 'Usuario no autenticado' })
  async getMyRoutines(@Request() req): Promise<Routine[]> {
    return this.routinesService.getUserRoutines(req.user.id);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener rutinas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de rutinas obtenida exitosamente',
  })
  findAll() {
    return this.routinesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener rutina por ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID rutina' })
  @ApiResponse({ status: 200, description: 'Rutina encontrada exitosamente' })
  findOne(@Param('id') id: string) {
    return this.routinesService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar rutina' })
  @ApiParam({ name: 'id', type: String, description: 'ID rutina' })
  @ApiBody({ type: UpdateRoutineDto })
  @ApiResponse({ status: 200, description: 'Rutina actualizada exitosamente' })
  update(@Param('id') id: string, @Body() body: UpdateRoutineDto) {
    return this.routinesService.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar rutina' })
  @ApiParam({ name: 'id', type: String, description: 'ID de la rutina' })
  @ApiResponse({ status: 200, description: 'Rutina eliminada exitosamente' })
  delete(@Param('id') id: string) {
    return this.routinesService.delete(id);
  }
}
