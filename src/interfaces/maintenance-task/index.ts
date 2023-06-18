import { PropertyInterface } from 'interfaces/property';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MaintenanceTaskInterface {
  id?: string;
  status: string;
  property_id?: string;
  maintenance_staff_id?: string;
  board_member_id?: string;
  created_at?: any;
  updated_at?: any;

  property?: PropertyInterface;
  user_maintenance_task_maintenance_staff_idTouser?: UserInterface;
  user_maintenance_task_board_member_idTouser?: UserInterface;
  _count?: {};
}

export interface MaintenanceTaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  property_id?: string;
  maintenance_staff_id?: string;
  board_member_id?: string;
}
