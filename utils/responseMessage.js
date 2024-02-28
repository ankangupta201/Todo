module.exports = {
    general: {
        success: {
            created: "Created Successfully",
            fetched: "Fetched Successfully",
            updated: "Updated Succesfully",
            deleted: "Deleted Succesfully"
        },
        error: {
            error: "error",
            notExist: "Does not exist",
            invalidID: "Please try again with valid id.",
            invalidUrl: "Please provide a valid url",
            percentage: "Percentage can never be greater than 100 or less than 0",
            endDate: "End date cannot be smaller than start date"
        }
    },
    jobs: {
        success: {
            applied: "Job successfully applied",
            created: "Job successfully posted",
            list: "Application list successfully fetched",
            data: "Data successfully fetched",
            cancelApplication: "Application successfully withdrawn",
        },
        error: {
            nolist: " You do not have any application",
            alreadyApplied: "You have already applied",
            notExist: "Does not exist"
        }
    },
    loginUser: {
        success: {
            successfull: "Login Successfull",
            userCreated: "User created successfully"
        },
        error: {
            inputerror: "All inputs are required",
            wrongCredentials: "Wrong Credentials",
            alreadyExist: "An account already exists with this email",
            wrongEmail: "This is not a valid email",
            wrongPassword: "This is not a secured password",
            registerFirst: "You need to resgister first to continue",
            wrongMobile: "This is not a valid mobile",
        }
    },
    profile: {
        success: {
            userProfile: "Profile created successfully",
            profileFetch: "Profile fetched successfully",
            profileUpdate: "Profile updated succesfully"
        },
        error: {
            error: "error",
            profileCreated: "Profile already created",
            noProfile: "Profile does not exist",
            invalidID: "Please try again with valid id.",
            invalidDate: "Date of birth cannot be greater that current date",
            imageError: "Please select only JPGs and PNGs"
        }
    },
    candidate: {
        success: {
            statusUpdate: "Candidate status updated succesfully"
        },
        error: {

        }
    },
    faq: {
        success: {
            fetched: "successfully fetched",
            posted: "successfully posted",
            update: "updated successfully",
            deleted: "deleted successfully"
        },
        error: {
            error: "error",
            wrongId: "Invalid ID"
        }
    },

    review: {
        successs: {

        },
        error: {
            noReviews: "No reviews found"
        }
    },
    saveJob: {
        success: {
            successfull: "Job saved successfully",
            unsaved: "Unsaved successfully"
        },
        error: {

        }
    },
    verificationCode: {
        success: {
            successfull: "code successfully sent"
        },
        error: {

        }
    },
    role: {
        success: {
            successfull: "Role added successfully",
            fetched: "Roles successfully fetched",
            updated: "Roles updated successfully",
            deleted: "Roles deleted successfully",
        },
        error: {
            wrongId: "Please provide the correct Id"
        }
    }
}