import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { EnumUploads, generateStorageMulter } from "../../configs/helpers.config";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBadRequestResponse, ApiBearerAuth, ApiConflictResponse, ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";

@ApiTags("Products")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
  }

  @Post()
  @ApiOperation({ summary: "This endpoint is for creating of a  product" })
  @ApiCreatedResponse({ description: "the  product was created successful" })
  @ApiBadRequestResponse({ description: "the  product wasn't created because some field was not correct " })
  @ApiConflictResponse({ description: "the  product wasn't created because this  product already exist" })
  @ApiConsumes("multipart/form-data")
  @UseInterceptors(FileInterceptor("mainImage", generateStorageMulter(EnumUploads.images, 5)))
  create(@Body() createProductDto: CreateProductDto, @UploadedFile() file: Express.Multer.File) {
    console.log(createProductDto);
    if (!file || !file.filename) throw new BadRequestException("image is required");
    return this.productsService.create({ ...createProductDto, mainImage: file.filename });
  }

  @Get()
  @ApiOperation({ summary: "This endpoint is for getting all  products" })
  @ApiOkResponse({ description: " products wanted" })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "This endpoint is for getting a  product by id" })
  findOne(@Param("id") id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "This endpoint is for update a  product by id" })
  @ApiOkResponse({ description: "the  product was updated successful" })
  @ApiBadRequestResponse({ description: "the  product wasn't updated because some field was not correct " })
  @ApiConsumes("multipart/form-data")
  @UseInterceptors(FileInterceptor("mainImage", generateStorageMulter(EnumUploads.images, 5)))
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto, @UploadedFile() file: Express.Multer.File) {
    let product: any = {
      ...updateProductDto
    };
    if (file && file.filename) {
      product = {

        file: file.filename
      };
    }
    return this.productsService.update(+id, product);
  }

  @Delete(":id")
  @ApiOperation({ summary: "This endpoint is for deletion of a  product by id" })
  @ApiOkResponse({ description: "the  product was deleted successful" })
  remove(@Param("id") id: string) {
    return this.productsService.remove(+id);
  }
}
