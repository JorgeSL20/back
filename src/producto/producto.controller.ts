import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productoService.create(createProductoDto);
  }

  @Get()
  findAll() {
    return this.productoService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const parsedId = parseInt(id, 10); // Convertir el ID a número entero
    return this.productoService.remove(parsedId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productoService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
  //   return this.productoService.update(id, updateProductoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productoService.remove(id);
  // }
}
