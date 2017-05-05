/**
 * Created by mitchell on 5/3/17.
 */
const initialState = {
    form: {
        demographic: {
            first: '',
            last: '',
            gender: undefined,
            dob: undefined,
            email: '',
            phone: '',
            streetAddress: '',
            city: '',
            state: '',
            zip: '',
            maritalStatus: ''
        },
        yesNo: {
            cancer: false,
            heartDisease: false,
            diabetes: false,
            bloodPressure: false,
            cholesterol: false,
            liver: false,
            drugAlcohol: false,
            anxiety: false,
            depression: false,
            tb: false,
            anesthesia: false,
            genetic: false,
            heartAttack: false,
            chronicObstructivePulmonaryDisease: false,
            hepatitis: false,
            backPain: false,
            psychoticDisorder: false,
            ibs: false,
            seizures: false,
            substanceAbuse: false,
            kidney: false,
            hiv: false,
            gastroIntestinal: false,
            thyroid: false,
            bipolar: false,
            eye: false,
            arthritis: false,
            asthma: false
        },
        shortAnswer: {
            smokingYN: false,
            alcoholYN: false,
            drugsYN: false,
            medicationsYN: false,
            allergiesYN: false,
            surgeriesYN: false,
            smokingExplanation: '',
            alcoholExplanation: '',
            drugsExplanation: '',
            medicationsExplanation: '',
            allergiesExplanation: '',
            surgeriesExplanation: ''
        },
        family: {
            maternalGrandFather: {},
            maternalGrandMother: {},
            paternalGrandFather: {},
            paternalGrandMother: {},
            mother: {},
            father: {},
            siblings: [],
            children: []
        }

    }
};

export default initialState;