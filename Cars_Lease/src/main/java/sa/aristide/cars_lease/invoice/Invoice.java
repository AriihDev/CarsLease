package sa.aristide.cars_lease.invoice;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import sa.aristide.cars_lease.contract.Contract;

@Data
@AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name="invoice")
public class Invoice {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Temporal(TemporalType.DATE)
	private Date date;
	private double amount;
	private String address;
	
	@OneToOne
	private Contract contract;

}
