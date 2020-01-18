import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';
import { ValidationError } from 'class-validator';

export class TaskStatusValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUpperCase();
    if (!TaskStatus[value]) {
      throw new BadRequestException(`${value} is not a valid status!`);
    }
    return value;
  }
}
