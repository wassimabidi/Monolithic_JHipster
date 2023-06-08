import dayjs from 'dayjs/esm';
import { Language } from 'app/entities/enumerations/language.model';

export interface IEmployee {
  id: number;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  hireDate?: dayjs.Dayjs | null;
  salary?: number | null;
  commissionPct?: number | null;
  language?: Language | null;
}

export type NewEmployee = Omit<IEmployee, 'id'> & { id: null };
