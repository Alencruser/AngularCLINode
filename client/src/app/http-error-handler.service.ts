import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Http } from '@angular/http';

export type HandleError = <T>(
	operation?:string,
	result?: T
	) => (error:HttpErrorResponse) => Observable<T>;

@Injectable()

export class HttpErrorHandler {
	constructor(private messageService: MessageService){}

	createHandleError = (ServiceName = "") =>  <T>(
		operation = "operation",
		result = {} as T
		) => this.handleError(ServiceName,operation, result);

	handleError<T>(ServiceName = "", operation = "operation" , result = {} as T){
		return (error: HttpErrorResponse) : Observable<T> => {
			console.error(error);

			const message =
			error.error instanceof ErrorEvent
			? error.error.message
			: `server returned code ${error.status} with body "${error.error}"`;

			this.messageService.add (
				`${ServiceName} : ${operation} failed ${message}`
			);

			return of(result);
		};
	}
}