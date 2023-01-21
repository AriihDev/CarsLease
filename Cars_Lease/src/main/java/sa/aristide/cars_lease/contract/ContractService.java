package sa.aristide.cars_lease.contract;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContractService {
	@Autowired
	ContractRepository contractRepository;

	public Contract addContract(Contract contract) {
		return contractRepository.save(contract);
	}

	public List<Contract> getAllContract() {
		return contractRepository.findAll();
	}

	public Contract getContractByID(Long id) {
		return contractRepository.findById(id).orElse(null);
	}

	public boolean deleteById(long id) {
		try {
			contractRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}

	}

	public Contract save(Contract updatedContract) {
		return contractRepository.save(updatedContract);
	}

	public Contract getById(long id) {
		return contractRepository.findById(id).orElse(null);
	}
}
