import dayjs from 'dayjs/esm';

import { Language } from 'app/entities/enumerations/language.model';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 7813,
};

export const sampleWithPartialData: IEmployee = {
  id: 67981,
  lastName: 'Mann',
  email: 'Zoie8@yahoo.com',
  hireDate: dayjs('2023-06-08T13:39'),
  commissionPct: 50464,
  language: Language['SPANISH'],
};

export const sampleWithFullData: IEmployee = {
  id: 40560,
  firstName: 'Eddie',
  lastName: 'Stoltenberg',
  email: 'Eldred52@yahoo.com',
  phoneNumber: 'Ville strategic',
  hireDate: dayjs('2023-06-08T11:36'),
  salary: 31845,
  commissionPct: 71772,
  language: Language['ENGLISH'],
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
