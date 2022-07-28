//FRED API Series Tag Names

//Inflation
export const headCPIIndex = 'CPIAUCSL' //Headline Consumer Price Index
export const CpiChgPrevPeriord  ='CPALTT01USM657N'; //CPI Change vs Prior Month
export const CpiPrevYear = 'CPALTT01USM659N' // CPI Change vs Prior Year Same Month
export const coreCpiIndex = 'CPILFESL' // Core CPI Index (EX Food and Energy)
export const PCE = 'PCE' // PCE
export const  TenYearBreakEven = 'T10YIE';//Inflation Expectations
export const M2 ='WM2NS' // M2 Money Supply


//Housing
export const Mortgage = 'MORTGAGE30US'
export const HomeSupply = 'MSACSR';
export const newHomeSales = '';
export const existingHomeSales = '';
export const medianHomePrice = '';


//Growth
export const RealGDP = 'GDPC1'
export const  GDP =  'GDP'
export const AdvanceRetailSalesAndFoodService = 'RSAFS';
export const AdvancedRetailSalesTrade= 'RSXFS';
export const RetailSalesAndFoodService = 'MRTSSM44X72USS';
export const  DurableGoods = 'DGORDER';
export const IndustrialProduction = 'INDPRO';
export const ManufactorsIndex = ''
export const PotentialNominalGDP= 'NGDPPOT';


//Labor 
export const UnemploymentRate = 'UNRATE';
export const LaborForceParticipation = 'CIVPART';
export const NonFarmEmployment = 'PAYEMS';
export const LaborForce = 'CLF16OV'


//Interest Rates
export const IntrestRatesTensLessTwos = 'T10Y2Y';
export const TenYearTreasury = 'DGS10'
export const TenYearInflationIndexTreasury = 'DFII10'
export const FedFunds = 'FEDFUNDS'
export const FedFundsUpperTarget = 'DFEDTARU'


//Releases
export const releases = 'https://api.stlouisfed.org/fred/releases?observation_start=2019-07-01&observation_end=2022-07-22&api_key=3930e57c78d990d30f7d376f5c406e2e&file_type=json'