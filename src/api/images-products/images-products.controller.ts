import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { ImagesProductsService } from "./images-products.service";
import { CreateImagesProductDto } from "./dto/create-images-product.dto";
import { UpdateImagesProductDto } from "./dto/update-images-product.dto";
import { EnumUploads, generateStorageMulter } from "../../configs/helpers.config";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBadRequestResponse, ApiBearerAuth, ApiConflictResponse, ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";

@ApiTags("Images products")
@Controller("images-products")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
export class ImagesProductsController {
  constructor(private readonly imagesProductsService: ImagesProductsService) {
  }

  @Post()
  @ApiOperation({ summary: "This endpoint is for creating of a image product" })
  @ApiCreatedResponse({ description: "the image product was created successful" })
  @ApiBadRequestResponse({ description: "the image product wasn't created because some field was not correct " })
  @ApiConflictResponse({ description: "the image product wasn't created because this image product already exist" })
  @ApiConsumes("multipart/form-data")
  @UseInterceptors(FileInterceptor("file", generateStorageMulter(EnumUploads.images, 5)))
  async create(@Body() createImagesProductDto: CreateImagesProductDto, @UploadedFile() file: Express.Multer.File) {
    if (!file || !file.filename) throw new BadRequestException("image is required");
    return this.imagesProductsService.create({
      title: createImagesProductDto.title,
      productId: createImagesProductDto.productId,
      file: file.filename,
      size: file.size.toString(),
      dimensions: "0x0"
    });
    // return await this.imagesProductsService.findAll({ where: { productId: createImagesProductDto.productId } });
  }

  @Get()
  @ApiOperation({ summary: "This endpoint is for getting all image products" })
  @ApiOkResponse({ description: "image products wanted" })
  findAll() {
    return this.imagesProductsService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "This endpoint is for getting a image product by id" })
  findOne(@Param("id") id: string) {
    return this.imagesProductsService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "This endpoint is for update a image product by id" })
  @ApiOkResponse({ description: "the image product was updated successful" })
  @ApiBadRequestResponse({ description: "the image product wasn't updated because some field was not correct " })
  @ApiConsumes("multipart/form-data")
  @UseInterceptors(FileInterceptor("file", generateStorageMulter(EnumUploads.images, 5)))
  update(@Param("id") id: string, @Body() updateImagesProductDto: UpdateImagesProductDto, @UploadedFile() file: Express.Multer.File) {
    let image: any = {
      title: updateImagesProductDto.title
    };
    if (file && file.filename) {
      image = {
        ...image,
        file: file.filename,
        size: file.size.toString(),
        dimensions: "0x0"
      };
    }
    return this.imagesProductsService.update(+id, { ...image });
  }

  @Delete(":id")
  @ApiOperation({ summary: "This endpoint is for deletion of a image product by id" })
  @ApiOkResponse({ description: "the image product was deleted successful" })
  remove(@Param("id") id: string) {
    return this.imagesProductsService.remove(+id);
  }
}
