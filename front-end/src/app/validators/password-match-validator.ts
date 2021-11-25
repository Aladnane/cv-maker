import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

export function password_match_validator(group: AbstractControl): {[key :string]: any} | null
{
  let password = (group as FormGroup).get('password');
  let password_confirmation = (group as FormGroup).get('password_confirmation');

  if(!password?.touched || !password_confirmation?.touched)
    return null;

  return password.value === password_confirmation.value ? null : {password_match: {not_match: true }};
}
