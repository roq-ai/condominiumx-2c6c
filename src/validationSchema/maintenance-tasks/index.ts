import * as yup from 'yup';

export const maintenanceTaskValidationSchema = yup.object().shape({
  status: yup.string().required(),
  property_id: yup.string().nullable(),
  maintenance_staff_id: yup.string().nullable(),
  board_member_id: yup.string().nullable(),
});
