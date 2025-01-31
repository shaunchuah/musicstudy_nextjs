import MotionPage from "../components/MotionPage";
import SectionHeader from "../components/SectionHeader";
import SectionWrapper from "../components/SectionWrapper";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

export default function Fatigue() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [result, setResult] = useState(null);
  const onSubmit = async (data) => {
    // Replace all false values with 0 before sending
    const cleanedData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        value === false ? 0 : value === true ? 1 : value === null ? "0" : value,
      ])
    );
    console.log(cleanedData);
    try {
      const response = await fetch("http://0.0.0.0:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleanedData),
      });

      const result = await response.json();
      console.log(result);
      setResult(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <MotionPage>
      <main className="flex flex-col w-full">
        <SectionWrapper id="fatigue">
          <SectionHeader title="Fatigue Predictor" />
          <div className="flex flex-col text-lg bg-white rounded-lg p-8 text-gray-700">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="text-2xl font-medium mb-4">Demographics</h3>

              <div class="mb-4">
                <label for="age" class="mb-4 text-gray-600 ">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 px-4 py-2"
                  placeholder="Age"
                  {...register("age", { required: true })}
                />

                {errors.age && (
                  <span className="text-red-400">*This field is required</span>
                )}
              </div>

              <div class="mb-4">
                <label for="sex" class="mb-4 text-gray-600 ">
                  Biological Sex
                </label>
                <select
                  id="sex"
                  name="sex"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 px-4 py-2"
                  placeholder="Biological Sex"
                  {...register("sex", { required: true })}
                >
                  <option value="">Select...</option>
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </select>
                {errors.sex && (
                  <span className="text-red-400">*This field is required</span>
                )}
              </div>
              <div class="mb-4">
                <label for="height" class="mb-4 text-gray-600 ">
                  Height (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 px-4 py-2"
                  placeholder="Height in cm"
                  {...register("height", { required: true, min: 0, max: 300 })}
                />

                {errors.height && (
                  <span className="text-red-400">*This field is required</span>
                )}
              </div>

              <div class="mb-4">
                <label for="weight" class="mb-4 text-gray-600 ">
                  Weight
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 px-4 py-2"
                  placeholder="Weight"
                  {...register("weight", { required: true })}
                />

                {errors.weight && (
                  <span className="text-red-400">*This field is required</span>
                )}
              </div>
              <div class="mb-4">
                <label for="is_smoker" class="mb-4 text-gray-600 ">
                  Smoking Status
                </label>
                <select
                  id="is_smoker"
                  name="is_smoker"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 px-4 py-2"
                  placeholder="Smoking Status"
                  {...register("is_smoker", { required: true })}
                >
                  <option value="">Select...</option>
                  <option value="Smoker">Smoker</option>
                  <option value="Non-smoker">Non-smoker</option>
                  <option value="Ex-smoker">Ex-smoker</option>
                </select>
                {errors.is_smoker && (
                  <span className="text-red-400">*This field is required</span>
                )}
              </div>

              <h3 className="text-2xl font-medium mb-4 mt-12">Diagnosis Details</h3>
              <div class="mb-4">
                <label for="study_group" class="mb-4 text-gray-600 ">
                  Diagnosis
                </label>
                <select
                  id="study_group"
                  name="study_group"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 px-4 py-2"
                  placeholder="Diagnosis"
                  {...register("study_group", { required: true })}
                >
                  <option value="">Select...</option>
                  <option value="cd">Crohn's Disease</option>
                  <option value="uc">Ulcerative Colitis</option>
                  <option value="ibdu">
                    Inflammatory Bowel Disease Unclassified
                  </option>
                </select>
                {errors.study_group && (
                  <span className="text-red-400">*This field is required</span>
                )}
              </div>

           

              <div class="mb-4">
                <label for="age_at_diagnosis" class="mb-4 text-gray-600 ">
                  Age at Diagnosis
                </label>
                <input
                  type="number"
                  id="age_at_diagnosis"
                  name="age_at_diagnosis"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 px-4 py-2"
                  placeholder="Age at Diagnosis"
                  {...register("age_at_diagnosis", { required: true })}
                />

                {errors.age && (
                  <span className="text-red-400">*This field is required</span>
                )}
              </div>

              <div class="mb-4">
                <label for="date_of_diagnosis" class="mb-4 text-gray-600 ">
                  Date of Diagnosis
                </label>
                <input
                  type="date"
                  id="date_of_diagnosis"
                  name="date_of_diagnosis"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 px-4 py-2"
                  {...register("date_of_diagnosis", { required: true })}
                />
                {errors.date_of_diagnosis && (
                  <span className="text-red-400">*This field is required</span>
                )}
              </div>

              

              <h3 className="text-2xl font-medium mb-4 mt-12">
                Montreal Classification
              </h3>

              <table>
                <thead>
                  <td>Montreal CD Location</td>
                  <td>Montreal CD Behaviour</td>
                </thead>
                <tr>
                  <td className="pr-4">
                    <div class=" gap-4">
                      <div>
                        <input
                          type="radio"
                          id="L1"
                          value="l1"
                          {...register("montreal_cd_location", {})}
                        />
                        <label for="L1" class="ml-2">
                          L1 Ileal Disease Only
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="L2"
                          value="l2"
                          {...register("montreal_cd_location", {})}
                        />
                        <label for="L2" class="ml-2">
                          L2 Colonic Disease Only
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="L3"
                          value="l3"
                          {...register("montreal_cd_location", {})}
                        />
                        <label for="L3" class="ml-2">
                          L3 Ileocolonic involvement
                        </label>
                      </div>
                    </div>
                    {errors.montreal_cd_location && (
                      <span className="text-red-400">
                        *This field is required
                      </span>
                    )}
                  </td>
                  <td>
                    <div class="gap-4">
                      <div>
                        <input
                          type="radio"
                          id="B1"
                          value="b1"
                          {...register("montreal_cd_behaviour", {})}
                        />
                        <label for="B1" class="ml-2">
                          B1 Non-stricturing, non-penetrating
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="B2"
                          value="b2"
                          {...register("montreal_cd_behaviour", {})}
                        />
                        <label for="B2" class="ml-2">
                          B2 Stricturing
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="B3"
                          value="b3"
                          {...register("montreal_cd_behaviour", {})}
                        />
                        <label for="B3" class="ml-2">
                          B3 Penetrating
                        </label>
                      </div>
                    </div>
                    {errors.montreal_cd_behaviour && (
                      <span className="text-red-400">
                        *This field is required
                      </span>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <input
                        type="checkbox"
                        id="montreal_upper_gi"
                        {...register("montreal_upper_gi")}
                      />
                      <label for="montreal_upper_gi" class="ml-2">
                        +/- L4 Upper GI Disease
                      </label>
                    </div>
                  </td>
                  <td>
                    <div>
                      <input
                        type="checkbox"
                        id="montreal_perianal"
                        {...register("montreal_perianal")}
                      />
                      <label for="montreal_perianal" class="ml-2">
                        +/- Perianal Disease
                      </label>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="pt-4">Montreal UC Extent</td>
                  <td className="pt-4">Montreal UC Severity</td>
                </tr>

                <tr>
                  <td className="pr-4">
                    <div class="gap-4">
                      <div>
                        <input
                          type="radio"
                          id="E1"
                          value="e1"
                          {...register("montreal_uc_extent", {})}
                        />
                        <label for="E1" class="ml-2">
                          E1 Proctitis
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="E2"
                          value="e2"
                          {...register("montreal_uc_extent", {})}
                        />
                        <label for="E2" class="ml-2">
                          E2 Left-sided Colitis
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="E3"
                          value="e3"
                          {...register("montreal_uc_extent", {})}
                        />
                        <label for="E3" class="ml-2">
                          E3 Extensive Colitis
                        </label>
                      </div>
                    </div>
                    {errors.montreal_uc_extent && (
                      <span className="text-red-400">
                        *This field is required
                      </span>
                    )}
                  </td>
                  <td>
                    <div class="gap-4">
                      <div>
                        <input
                          type="radio"
                          id="S0"
                          value="s0"
                          {...register("montreal_uc_severity", {})}
                        />
                        <label for="S0" class="ml-2">
                          S0 Clinical Remission
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="S1"
                          value="s1"
                          {...register("montreal_uc_severity", {})}
                        />
                        <label for="S1" class="ml-2">
                          S1 Mild
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="S2"
                          value="s2"
                          {...register("montreal_uc_severity", {})}
                        />
                        <label for="S2" class="ml-2">
                          S2 Moderate
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="S3"
                          value="s3"
                          {...register("montreal_uc_severity", {})}
                        />
                        <label for="S3" class="ml-2">
                          S3 Severe
                        </label>
                      </div>
                    </div>
                    {errors.montreal_uc_severity && (
                      <span className="text-red-400">
                        *This field is required
                      </span>
                    )}
                  </td>
                </tr>
              </table>

              <h3 className="mt-12 text-2xl font-medium mb-4">
                Current Drug Therapy
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <input
                    type="checkbox"
                    id="sampling_steroids"
                    {...register("sampling_steroids")}
                  />
                  <label htmlFor="sampling_steroids" className="ml-2">
                    Steroids
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sampling_abx"
                    {...register("sampling_abx")}
                  />
                  <label htmlFor="sampling_abx" className="ml-2">
                    Antibiotics
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sampling_asa"
                    {...register("sampling_asa")}
                  />
                  <label htmlFor="sampling_asa" className="ml-2">
                    5-ASA
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sampling_aza"
                    {...register("sampling_aza")}
                  />
                  <label htmlFor="sampling_aza" className="ml-2">
                    Azathioprine
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sampling_mp"
                    {...register("sampling_mp")}
                  />
                  <label htmlFor="sampling_mp" className="ml-2">
                    6-Mercaptopurine
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sampling_ifx"
                    {...register("sampling_ifx")}
                  />
                  <label htmlFor="sampling_ifx" className="ml-2">
                    Infliximab
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sampling_ada"
                    {...register("sampling_ada")}
                  />
                  <label htmlFor="sampling_ada" className="ml-2">
                    Adalimumab
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sampling_vedo"
                    {...register("sampling_vedo")}
                  />
                  <label htmlFor="sampling_vedo" className="ml-2">
                    Vedolizumab
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sampling_uste"
                    {...register("sampling_uste")}
                  />
                  <label htmlFor="sampling_uste" className="ml-2">
                    Ustekinumab
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sampling_tofa"
                    {...register("sampling_tofa")}
                  />
                  <label htmlFor="sampling_tofa" className="ml-2">
                    Tofacitinib
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sampling_mtx"
                    {...register("sampling_mtx")}
                  />
                  <label htmlFor="sampling_mtx" className="ml-2">
                    Methotrexate
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sampling_ciclosporin"
                    {...register("sampling_ciclosporin")}
                  />
                  <label htmlFor="sampling_ciclosporin" className="ml-2">
                    Ciclosporin
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sampling_filgo"
                    {...register("sampling_filgo")}
                  />
                  <label htmlFor="sampling_filgo" className="ml-2">
                    Filgotinib
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sampling_upa"
                    {...register("sampling_upa")}
                  />
                  <label htmlFor="sampling_upa" className="ml-2">
                    Upadacitinib
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sampling_risa"
                    {...register("sampling_risa")}
                  />
                  <label htmlFor="sampling_risa" className="ml-2">
                    Risankizumab
                  </label>
                </div>
              </div>

              <h3 className="mt-12 text-2xl font-medium mb-8">
                Current Lab Results
              </h3>

              <h4 className="text-xl font-medium mb-4">Full Blood Count</h4>
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="mb-4">
                  <label htmlFor="haemoglobin" className="mb-4 text-gray-600">
                    Haemoglobin (g/L)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    id="haemoglobin"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
                    {...register("haemoglobin", {
                      required: true,
                      min: 0,
                      max: 300,
                    })}
                  />
                  {errors.haemoglobin && (
                    <span className="text-red-400">*Required, 0-300</span>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="red_cell_count"
                    className="mb-4 text-gray-600"
                  >
                    Red Cell Count (x10^12/L)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    id="red_cell_count"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
                    {...register("red_cell_count", { required: true, min: 0 })}
                  />
                  {errors.red_cell_count && (
                    <span className="text-red-400">*Required</span>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="white_cell_count"
                    className="mb-4 text-gray-600"
                  >
                    White Cell Count (x10^9/L)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    id="white_cell_count"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
                    {...register("white_cell_count", {
                      required: true,
                      min: 0,
                    })}
                  />
                  {errors.white_cell_count && (
                    <span className="text-red-400">*Required</span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="neutrophils" className="mb-4 text-gray-600">
                    Neutrophils (x10^9/L)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    id="neutrophils"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
                    {...register("neutrophils", { required: true, min: 0 })}
                  />
                  {errors.neutrophils && (
                    <span className="text-red-400">*Required</span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="lymphocytes" className="mb-4 text-gray-600">
                    Lymphocytes (x10^9/L)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    id="lymphocytes"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
                    {...register("lymphocytes", { required: true, min: 0 })}
                  />
                  {errors.lymphocytes && (
                    <span className="text-red-400">*Required</span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="monocytes" className="mb-4 text-gray-600">
                    Monocytes (x10^9/L)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    id="monocytes"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
                    {...register("monocytes", { required: true, min: 0 })}
                  />
                  {errors.monocytes && (
                    <span className="text-red-400">*Required</span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="eosinophils" className="mb-4 text-gray-600">
                    Eosinophils (x10^9/L)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    id="eosinophils"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
                    {...register("eosinophils", { required: true, min: 0 })}
                  />
                  {errors.eosinophils && (
                    <span className="text-red-400">*Required</span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="basophils" className="mb-4 text-gray-600">
                    Basophils (x10^9/L)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    id="basophils"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
                    {...register("basophils", { required: true, min: 0 })}
                  />
                  {errors.basophils && (
                    <span className="text-red-400">*Required</span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="platelets" className="mb-4 text-gray-600">
                    Platelets (x10^9/L)
                  </label>
                  <input
                    type="number"
                    step="1"
                    id="platelets"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
                    {...register("platelets", {
                      required: true,
                      min: 0,
                      max: 1500,
                    })}
                  />
                  {errors.platelets && (
                    <span className="text-red-400">*Required, 0-1500</span>
                  )}
                </div>
              </div>
              <h4 className="text-xl font-medium mb-4">Urea & Electrolytes</h4>
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="mb-4">
                  <label htmlFor="urea" className="mb-4 text-gray-600">
                    Urea (mmol/L)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    id="urea"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
                    {...register("urea", { required: true, min: 0, max: 30 })}
                  />
                  {errors.urea && (
                    <span className="text-red-400">*Required, 0-30</span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="creatinine" className="mb-4 text-gray-600">
                    Creatinine (μmol/L)
                  </label>
                  <input
                    type="number"
                    step="1"
                    id="creatinine"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
                    {...register("creatinine", {
                      required: true,
                      min: 0,
                      max: 1000,
                    })}
                  />
                  {errors.creatinine && (
                    <span className="text-red-400">*Required, 0-1000</span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="sodium" className="mb-4 text-gray-600">
                    Sodium (mmol/L)
                  </label>
                  <input
                    type="number"
                    step="1"
                    id="sodium"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
                    {...register("sodium", {
                      required: true,
                      min: 110,
                      max: 150,
                    })}
                  />
                  {errors.sodium && (
                    <span className="text-red-400">*Required, 110-150</span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="potassium" className="mb-4 text-gray-600">
                    Potassium (mmol/L)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    id="potassium"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
                    {...register("potassium", {
                      required: true,
                      min: 0,
                      max: 10,
                    })}
                  />
                  {errors.potassium && (
                    <span className="text-red-400">*Required, 0-10</span>
                  )}
                </div>
                </div>
              <h4 className="text-xl font-medium mb-4">Markers of Inflammation</h4>
              <div className="grid grid-cols-4 gap-4">

              <div className="mb-4">
                  <label htmlFor="crp" className="mb-4 text-gray-600">
                    CRP (mg/L)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    id="crp"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
                    {...register("crp", { required: true, min: 0, max: 500 })}
                  />
                  {errors.crp && (
                    <span className="text-red-400">*Required, 0-500</span>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="albumin" className="mb-4 text-gray-600">
                    Albumin (g/L)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    id="albumin"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
                    {...register("albumin", {
                      required: true,
                      min: 0,
                      max: 100,
                    })}
                  />
                  {errors.albumin && (
                    <span className="text-red-400">*Required, 0-100</span>
                  )}
                </div>

               

                <div className="mb-4">
                  <label htmlFor="calprotectin" className="mb-4 text-gray-600">
                    Calprotectin (μg/g)
                  </label>
                  <input
                    type="number"
                    step="1"
                    id="calprotectin"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2"
                    {...register("calprotectin", {
                      required: true,
                      min: 0,
                      max: 2000,
                    })}
                  />
                  {errors.calprotectin && (
                    <span className="text-red-400">*Required, 0-2000</span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                class="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg w-full sm:w-auto px-5 py-2.5 text-center "
              >
                Get Prediction
              </button>
            </form>
          </div>

          <div>
            {result && (
              <div className="flex flex-col text-lg bg-white rounded-lg p-8 text-gray-700 mt-8">
                <h3 className="text-2xl font-medium mb-4">
                  Prediction Results
                </h3>
                <div className="mb-4">
                  <p>Predicted Class: {result.predicted_class}</p>
                  <p>
                    Explanation:{" "}
                    {result.predicted_class === "no_fatigue"
                      ? "Likely less than 10 days of fatigue out of last 14 days"
                      : "Likely fatigue >= 10 out of last 14 days"}
                  </p>
                  <p>
                    Softmax Output: {result.predicted_probability.toFixed(3)}
                  </p>
                </div>
                {result.force_plot && (
                  <div className="mt-4">
                    <img src={`${result.force_plot}`} alt="Prediction plot" />
                  </div>
                )}
              </div>
            )}
          </div>
        </SectionWrapper>
      </main>
    </MotionPage>
  );
}
