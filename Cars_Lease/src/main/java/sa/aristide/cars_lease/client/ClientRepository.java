package sa.aristide.cars_lease.client;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {

	Client deleteById(long id);
	List<Client> findByFname(String fname);
}
