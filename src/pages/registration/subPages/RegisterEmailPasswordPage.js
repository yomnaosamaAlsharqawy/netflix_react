import RegistrationForm from '../../../components/accounts/RegistrationForm';

export default function RegisterEmailPasswordPage() {
    return (
        <div>
            <div>
                <div className="font-weight-bold text-muted">STEP 1 OF 3</div>
                <div className="h4 font-weight-bold">Create a password to start your membership.</div>
                <div className="lead">Just a few more steps and you're done! We hate paperwork, too.</div>
            </div>
            <div className="mt-3">
                <RegistrationForm />
            </div>
        </div>
    )
}