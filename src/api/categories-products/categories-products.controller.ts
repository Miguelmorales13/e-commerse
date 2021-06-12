import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { CategoriesProductsService } from "./categories-products.service";
import { CreateCategoriesProductDto } from "./dto/create-categories-product.dto";
import { UpdateCategoriesProductDto } from "./dto/update-categories-product.dto";
import { ApiBadRequestResponse, ApiBearerAuth, ApiConflictResponse, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";

@Controller("categories-products")
@ApiTags("Categories products")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
export class CategoriesProductsController {
  constructor(private readonly categoriesProductsService: CategoriesProductsService) {
  }

  @Post()
  @ApiOperation({ summary: "This endpoint is for creating of a category product" })
  @ApiCreatedResponse({ description: "the category product was created successful" })
  @ApiBadRequestResponse({ description: "the category product wasn't created because some field was not correct " })
  @ApiConflictResponse({ description: "the category product wasn't created because this usr already exist" })
  create(@Body() createCategoriesProductDto: CreateCategoriesProductDto) {
    console.log(createCategoriesProductDto);
    return this.categoriesProductsService.create({ ...createCategoriesProductDto, categoryId: createCategoriesProductDto.categoryId === 0 ? null : createCategoriesProductDto.categoryId });
  }

  @Get()
  @ApiOperation({ summary: "This endpoint is for getting all category products" })
  @ApiOkResponse({ description: "category products wanted" })
  findAll() {
    return this.categoriesProductsService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "This endpoint is for getting a category product by id" })
  findOne(@Param("id") id: string) {
    return this.categoriesProductsService.findOne(+id);
  }

  @Patch(":id")
  @ApiOkResponse({ description: "the category product was updated successful" })
  @ApiBadRequestResponse({ description: "the category product wasn't updated because some field was not correct " })
  update(@Param("id") id: string, @Body() updateCategoriesProductDto: UpdateCategoriesProductDto) {
    return this.categoriesProductsService.update(+id, { ...updateCategoriesProductDto, categoryId: updateCategoriesProductDto.categoryId === 0 ? null : updateCategoriesProductDto.categoryId });
  }

  @Delete(":id")
  @ApiOperation({ summary: "This endpoint is for deletion of a category product by id" })
  @ApiOkResponse({ description: "the category product was deleted successful" })
  remove(@Param("id") id: string) {
    return this.categoriesProductsService.remove(+id);
  }
}
