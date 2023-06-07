create table t_client(
	client_number varchar(10),
	client_name varchar,
	birth_date date,
	constraint client_number_pk primary key(client_number)
)
insert into t_client (client_number, client_name, birth_date)
values 
('CL001', 'WAYNE ROONEY', '1956/5/11'),
('CL002', 'RYAN GIGS', '1972/9/3'),
('CL003', 'DAVID BECKHAM', '1985/9/3'),
('CL004', 'MICHAEL OWEN', '2012/9/3')
create table t_agent(
	agent_code varchar(10),
	agent_name varchar(20),
	agent_office varchar(20),
	basic_commission bigint,
	constraint agent_code_pk primary key(agent_code)
)
insert into t_agent (agent_code, agent_name, agent_office)
values 
('AG001', 'LIDYA', 'Jakarta'),
('AG002', 'RUDI', 'Bali'),
('AG003', 'DICKY', 'Bali'),
('AG004', 'DAVID', 'Surabaya'),
('AG005', 'FARIZ', 'Surabaya')

create table t_policy(
	policy_number varchar(4),
	policy_submit_date date,
	premium bigint,
	discount int,
	commission bigint,
	client_number varchar(10),
	agent_code varchar(10),
	policy_status varchar(20),
	policy_due_date date,
	constraint policy_number_pk primary key(policy_number),
	constraint client_number_fk foreign key(client_number) references t_client(client_number),
	constraint agent_code_fk foreign key(agent_code) references t_agent(agent_code)
)
insert into t_policy (policy_number,policy_submit_date,premium,discount,commission,client_number,agent_code,policy_status)
values ('001', '2018/1/5', '18600000',10,'930000','CL001','AG001','INFORCE'),
('002', '2018/1/5', '2500000',10,'125000','CL002','AG002','INFORCE'),
('003', '2018/1/10', '2500000',10,'125000','CL003','AG003','TERMINATE'),
('004', '2018/1/25', '4000000',10,'200000','CL003','AG002','PROPOSAL'),
('005', '2018/1/25', '2625000',10,'131250','CL004','AG002','PROPOSAL')

//5.1
SELECT a.policy_submit_date, c.birth_date
FROM t_policy a
JOIN t_AGENT b ON b.agent_code = a.agent_code
JOIN t_CLIENT c ON c.client_number = a.client_number
WHERE a.policy_submit_date= '2018-01-25'
;
//5.2
SELECT a.policy_status, b.agent_office
FROM t_policy a
JOIN t_agent b ON b.agent_code = a.agent_code
WHERE a.policy_status = 'INFORCE'
AND b.agent_office ='Jakarta';
//5.3
UPDATE t_AGENT 
JOIN t_policy b ON b.agent_code = a.agent_code
JOIN t_CLIENT c ON c.client_number = a.client_number
SET basic_commision = commission / premium * 100;

//5.4
UPDATE t_POLICY
SET POLICY_DUE_DATE = DATE_TRUNC('MONTH', POLICY_SUBMIT_DATE) + INTERVAL '30 days' - INTERVAL '1 day';
//5.5
SELECT premium * 0.1 AS prem
FROM t_POLICY
WHERE premium - (premium * 0.1) > 1000000;