import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../tasks.model';

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedSatus = [ TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE ];
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value, metadata);
    value = value.toUpperCase()
    if(!this.isStatusValid(value)){
        throw new BadRequestException(`"${value}" is a Invalid status`)
    }
    return value;
  }

  private isStatusValid(status: any){
      const idX = this.allowedSatus.indexOf(status)
      return idX !== -1;
  }
}
