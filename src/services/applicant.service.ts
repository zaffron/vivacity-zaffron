import { dataSource } from '../db';
import { Applicant } from '../entity/Applicant';

export class ApplicantService {
    private applicantRepository = dataSource.getRepository(Applicant);

    async getAllApplicants(): Promise<Applicant[]> {
        return this.applicantRepository.find();
    }

    async createApplicant(data: Partial<Applicant>): Promise<Applicant> {
        const applicant = this.applicantRepository.create(data);
        return this.applicantRepository.save(applicant);
    }

    async getApplicantById(id: number): Promise<Applicant | null> {
        return this.applicantRepository.findOneBy({ id });
    }

    async updateApplicant(id: number, data: Partial<Applicant>): Promise<Applicant | null> {
        let applicant = await this.applicantRepository.findOneBy({ id });
        if (applicant) {
            applicant = this.applicantRepository.merge(applicant, data);
            return this.applicantRepository.save(applicant);
        }
        return null;
    }

    async deleteApplicant(id: number): Promise<void> {
        await this.applicantRepository.delete(id);
    }
}
