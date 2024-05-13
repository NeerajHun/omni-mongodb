import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly age: number;

  @IsBoolean()
  @IsNotEmpty()
  readonly status: boolean;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly gender: string;
}
