package sa.aristide.cars_lease.contract;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ContractRepository extends JpaRepository<Contract, Long>{

	Contract deleteById(long id);
}
