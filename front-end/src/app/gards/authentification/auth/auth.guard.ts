import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate CanDeactivate {

	public constructor(
		private authentication_service: AuthenticationService,
		private router: Router
	){}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
	{
		if(this.authentication_service.is_authenticated())
			return true;

		this.router.navigate(["/login"]);
		return false;
	}

}
