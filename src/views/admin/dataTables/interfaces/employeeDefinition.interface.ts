export interface EmployeeDefinition {
  id: number;
  CreatedOn: Date;
  ModifiedOn: Date;
  IsActive: boolean;
  FirstName: string;
  LastName: string;
  DateOfBirth: Date;
  Gender: string;
  JoinedDate: Date;
  LeftDate?: Date;
  BeenzBalance?: number;
}
