package sa.aristide.cars_lease.car;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import sa.aristide.cars_lease.contract.Contract;
import sa.aristide.cars_lease.option.Option;

@Data
@AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name="car")
public class Car {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String registration;
	private String brand;
	private String color;
	private String fuel;
	private double cylindre;
	private int maxSpeed;
	private int Km;
	private boolean inUse;
	@Temporal(TemporalType.DATE)
	private Date firstUse;
	
	@OneToMany(mappedBy = "car", fetch = FetchType.LAZY)
    @JsonProperty(access= Access.WRITE_ONLY)
    private List<Contract> contracts;
    
    
    @ManyToMany
    private List<Option> options;


	

}
