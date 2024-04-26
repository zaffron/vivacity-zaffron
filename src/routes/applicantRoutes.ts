import { Router } from 'express';
import { ApplicantService } from '../services/applicant.service';

const router = Router();
const applicantService = new ApplicantService();

router.get('/', async (req, res) => {
    const applicants = await applicantService.getAllApplicants();
    res.json(applicants);
});

// Since the requirement doesn't ask for validation, I will skip for now and go for basic
router.post('/', async (req, res) => {
    const applicant = await applicantService.createApplicant(req.body);
    res.status(201).json(applicant);
});

router.get('/:id', async (req, res) => {
    const applicant = await applicantService.getApplicantById(parseInt(req.params.id));
    if (applicant) {
        res.json(applicant);
    } else {
        res.status(404).send('Applicant not found');
    }
});

router.put('/:id', async (req, res) => {
    const updatedApplicant = await applicantService.updateApplicant(parseInt(req.params.id), req.body);
    if (updatedApplicant) {
        res.json(updatedApplicant);
    } else {
        res.status(404).send('Applicant not found');
    }
});

router.delete('/:id', async (req, res) => {
    await applicantService.deleteApplicant(parseInt(req.params.id));
    res.status(204).send();
});

export default router;
