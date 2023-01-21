package sa.aristide.cars_lease.invoice;

import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceRepository extends JpaRepository<Invoice, Long> {

	Invoice deleteById(long id);
}
