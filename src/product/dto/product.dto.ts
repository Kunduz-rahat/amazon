import { IsArray, IsNumber, IsString } from 'class-validator';
export class ProductDto {
  @IsString()
  name: string

  @IsString()
  slug: string

  @IsNumber()
  price:number

  @IsNumber()
  id:number
  
  @IsString()
  description:string

  @IsArray()
  items:[]
}
