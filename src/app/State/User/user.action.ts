import { createAction, props } from "@ngrx/store"

export const getUserProfile= createAction('[User] get User Profile ')

export const getUserProfileSuccess= createAction('[User] get User Profile Success',props<{userProfile:any}>())

export const getUserProfileFailure= createAction('[User] get User Profile Failure',props<{error:any}>())

export const logOutSuccess= createAction('[User] Log Out Success ')
