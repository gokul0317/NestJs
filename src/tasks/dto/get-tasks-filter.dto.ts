import { TaskStatus } from '../tasks.model';
import { IsOptional, IsIn, IsEmpty, IsNotEmpty } from 'class-validator';

export class GetTaskFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.OPEN])
  status: TaskStatus;
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
