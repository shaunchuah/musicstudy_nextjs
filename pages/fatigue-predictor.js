import MotionPage from "../components/MotionPage";
import SectionHeader from "../components/SectionHeader";
import SectionWrapper from "../components/SectionWrapper";
import CheckboxField from "../components/forms/CheckboxField";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

export default function Fatigue() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const studyGroup = watch("study_group");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data) => {
    // Replace all false values with 0 before sending
    const cleanedData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        value === false ? 0 : value === true ? 1 : value === null ? "0" : value,
      ])
    );

    if (!("montreal_uc_extent" in cleanedData)) {
      cleanedData.montreal_uc_extent = "0";
    }
    if (!("montreal_uc_severity" in cleanedData)) {
      cleanedData.montreal_uc_severity = "0";
    }
    if (!("montreal_cd_location" in cleanedData)) {
      cleanedData.montreal_cd_location = "0";
    }
    if (!("montreal_cd_behaviour" in cleanedData)) {
      cleanedData.montreal_cd_behaviour = "0";
    }
    if (!("montreal_upper_gi" in cleanedData)) {
      cleanedData.montreal_upper_gi = "0";
    }
    if (!("montreal_perianal" in cleanedData)) {
      cleanedData.montreal_perianal = "0";
    }

    console.log(cleanedData);
    setIsLoading(true); // Set loading state before the request
    try {
      const response = await fetch("https://edi.sampletrek.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleanedData),
      });

      const result = await response.json();
      if (result["error"]) {
        console.log("Error:", result["error"]);
        setResult(null);
        setIsLoading(false);
        return;
      }
      console.log(result);
      setResult(result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Reset loading state after the request completes
    }
  };

  return (
    <MotionPage>
      <main className="flex flex-col w-full">
        <SectionWrapper id="fatigue">
          <SectionHeader title="Fatigue Predictor" />

          <div
            class=" items-center px-4 md:px-8 py-4 mb-4 text-red-800 rounded-lg bg-red-100 "
            role="alert"
          >
            <div className="flex flex-row items-center mb-2">
              <svg
                class="shrink-0 inline w-4 h-4 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">Disclaimer</span>
              </div>
            </div>
            <div>
              <p className="mb-1">
                This fatigue predictor is for research use/interest only and has
                not been validated. We may record responses to ensure the
                backend can handle the load.
              </p>
              
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col text-lg bg-white rounded-lg p-4 md:p-8 text-gray-700 mb-4">
              <div class="">
                <h3 className="text-2xl font-medium mb-4">Baseline</h3>
                <div class="mb-4">
                  <label for="height" class="mb-4 text-gray-600 ">
                    On how many days over the last 14 days have you felt
                    fatigue? (0-14)
                  </label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 px-4 py-2"
                    placeholder="Fatigue Days"
                    {...register("cucq_5", {
                      min: 0,
                      max: 14,
                      required: true,
                    })}
                  />

                  {errors.cucq_5 && (
                    <span className="text-red-400">
                      *Enter a number between 0-14
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col text-lg bg-white rounded-lg p-4 md:p-8 text-gray-700">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div class="mb-4 ">
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
                      <span className="text-red-400">
                        *This field is required
                      </span>
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
                      <span className="text-red-400">
                        *This field is required
                      </span>
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
                      {...register("height", {
                        required: true,
                        min: 0,
                        max: 300,
                      })}
                    />

                    {errors.height && (
                      <span className="text-red-400">
                        *This field is required
                      </span>
                    )}
                  </div>

                  <div class="mb-4">
                    <label for="weight" class="mb-4 text-gray-600 ">
                      Weight (kg)
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
                      <span className="text-red-400">
                        *This field is required
                      </span>
                    )}
                  </div>
                  <div class="">
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
                      <span className="text-red-400">
                        *This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">
                    Diagnosis Details
                  </h3>
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
                      <span className="text-red-400">
                        *This field is required
                      </span>
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
                      <span className="text-red-400">
                        *This field is required
                      </span>
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
                      <span className="text-red-400">
                        *This field is required
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="mb-4 text-gray-600">
                      Currently has symptoms of active IBD
                    </label>
                    <div className="flex gap-4 border border-gray-300 text-gray-900 rounded-lg px-4 py-2 w-64 bg-gray-100">
                      <div>
                        <input
                          type="radio"
                          id="has_active_symptoms_yes"
                          value="1"
                          {...register("has_active_symptoms", {
                            required: true,
                          })}
                        />
                        <label
                          htmlFor="has_active_symptoms_yes"
                          className="ml-2"
                        >
                          Yes
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="has_active_symptoms_no"
                          value="0"
                          {...register("has_active_symptoms", {
                            required: true,
                          })}
                        />
                        <label
                          htmlFor="has_active_symptoms_no"
                          className="ml-2"
                        >
                          No
                        </label>
                      </div>
                    </div>
                    {errors.has_active_symptoms && (
                      <span className="text-red-400">
                        *This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-medium mb-4 mt-4">
                Montreal Classification
              </h3>

              {!["cd", "ibdu", "uc"].includes(studyGroup) && (
                <div className="my-4 p-4 border border-gray-300 rounded-lg text-center text-gray-600 animate-fadeIn">
                  <p>
                    Please select a diagnosis above to display the relevant
                    Montreal Classification fields.
                  </p>
                </div>
              )}

              {(studyGroup === "cd" || studyGroup === "ibdu") && (
                <div className="flex flex-wrap animate-fadeIn mb-4">
                  <div className="w-full md:w-1/2 pr-4 mb-4">
                    <div className="mb-2 font-semibold">
                      Montreal CD Location
                    </div>
                    <div className="flex flex-col gap-4">
                      <div>
                        <input
                          type="radio"
                          id="L1"
                          value="l1"
                          {...register("montreal_cd_location", {})}
                        />
                        <label htmlFor="L1" className="ml-2">
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
                        <label htmlFor="L2" className="ml-2">
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
                        <label htmlFor="L3" className="ml-2">
                          L3 Ileocolonic involvement
                        </label>
                      </div>
                    </div>
                    {errors.montreal_cd_location && (
                      <span className="text-red-400">
                        *This field is required
                      </span>
                    )}
                    <div className="mt-4">
                      <input
                        type="checkbox"
                        id="montreal_upper_gi"
                        {...register("montreal_upper_gi")}
                      />
                      <label htmlFor="montreal_upper_gi" className="ml-2">
                        +/- L4 Upper GI Disease
                      </label>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="mb-2 font-semibold">
                      Montreal CD Behaviour
                    </div>
                    <div className="flex flex-col gap-4">
                      <div>
                        <input
                          type="radio"
                          id="B1"
                          value="b1"
                          {...register("montreal_cd_behaviour", {})}
                        />
                        <label htmlFor="B1" className="ml-2">
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
                        <label htmlFor="B2" className="ml-2">
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
                        <label htmlFor="B3" className="ml-2">
                          B3 Penetrating
                        </label>
                      </div>
                    </div>
                    {errors.montreal_cd_behaviour && (
                      <span className="text-red-400">
                        *This field is required
                      </span>
                    )}
                    <div className="mt-4">
                      <input
                        type="checkbox"
                        id="montreal_perianal"
                        {...register("montreal_perianal")}
                      />
                      <label htmlFor="montreal_perianal" className="ml-2">
                        +/- Perianal Disease
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {(studyGroup === "uc" || studyGroup === "ibdu") && (
                <div className="flex flex-wrap mt-8 animate-fadeIn mb-4">
                  <div className="w-full md:w-1/2 pr-4 mb-4">
                    <div className="mb-2 font-semibold">Montreal UC Extent</div>
                    <div className="flex flex-col gap-4">
                      <div>
                        <input
                          type="radio"
                          id="E1"
                          value="e1"
                          {...register("montreal_uc_extent", {})}
                        />
                        <label htmlFor="E1" className="ml-2">
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
                        <label htmlFor="E2" className="ml-2">
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
                        <label htmlFor="E3" className="ml-2">
                          E3 Extensive Colitis
                        </label>
                      </div>
                    </div>
                    {errors.montreal_uc_extent && (
                      <span className="text-red-400">
                        *This field is required
                      </span>
                    )}
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="mb-2 font-semibold">
                      Montreal UC Severity
                    </div>
                    <div className="flex flex-col gap-4">
                      <div>
                        <input
                          type="radio"
                          id="S0"
                          value="s0"
                          {...register("montreal_uc_severity", {})}
                        />
                        <label htmlFor="S0" className="ml-2">
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
                        <label htmlFor="S1" className="ml-2">
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
                        <label htmlFor="S2" className="ml-2">
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
                        <label htmlFor="S3" className="ml-2">
                          S3 Severe
                        </label>
                      </div>
                    </div>
                    {errors.montreal_uc_severity && (
                      <span className="text-red-400">
                        *This field is required
                      </span>
                    )}
                  </div>
                </div>
              )}
              <h3 className=" text-2xl font-medium mb-4">
                Current Drug Therapy
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <CheckboxField
                  id="sampling_steroids"
                  label="Steroids (any)"
                  register={register}
                />
                <CheckboxField
                  id="sampling_abx"
                  label="Antibiotics (any)"
                  register={register}
                />
                <CheckboxField
                  id="sampling_asa"
                  label="5-ASA (any)"
                  register={register}
                />
                <CheckboxField
                  id="sampling_aza"
                  label="Azathioprine"
                  register={register}
                />
                <CheckboxField
                  id="sampling_mp"
                  label="Mercaptopurine"
                  register={register}
                />
                <CheckboxField
                  id="sampling_mtx"
                  label="Methotrexate"
                  register={register}
                />
                <CheckboxField
                  id="sampling_ifx"
                  label="Infliximab"
                  register={register}
                />
                <CheckboxField
                  id="sampling_ada"
                  label="Adalimumab"
                  register={register}
                />
                <CheckboxField
                  id="sampling_vedo"
                  label="Vedolizumab"
                  register={register}
                />
                <CheckboxField
                  id="sampling_uste"
                  label="Ustekinumab"
                  register={register}
                />
                <CheckboxField
                  id="sampling_tofa"
                  label="Tofacitinib"
                  register={register}
                />
                <CheckboxField
                  id="sampling_filgo"
                  label="Filgotinib"
                  register={register}
                />
                <CheckboxField
                  id="sampling_upa"
                  label="Upadacitinib"
                  register={register}
                />
                <CheckboxField
                  id="sampling_risa"
                  label="Risankizumab"
                  register={register}
                />
                <CheckboxField
                  id="sampling_ciclosporin"
                  label="Ciclosporin"
                  register={register}
                />
              </div>

              <h3 className="text-2xl font-medium mb-4">Current Lab Results</h3>

              <h4 className="text-xl font-medium mb-4">Full Blood Count</h4>
              <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
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
              <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
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
              <h4 className="text-xl font-medium mb-4">
                Markers of Inflammation
              </h4>
              <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin inline w-5 h-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Get Prediction"
                )}
              </button>
            </div>
          </form>
          <div>
            {isLoading ? (
              <div className="flex items-center justify-center bg-white rounded-lg p-4 md:p-8 text-gray-700 mt-8 text-lg">
                <svg
                  className="animate-spin inline w-5 h-5 mr-3 text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                <span>Loading prediction...</span>
              </div>
            ) : result ? (
              <div className="flex flex-col text-lg bg-white rounded-lg p-4 md:p-8 text-gray-700 mt-8">
                <h3 className="text-2xl font-medium mb-4">
                  Prediction Results
                </h3>
                <div className="mb-8">
                  <div className="max-w-lg  border shadow-md rounded-lg p-4 mb-4">
                    <h4 className=" uppercase text-sm mb-4">Predicted Class</h4>
                    <div className="text-4xl  mb-4">
                      {result.predicted_class === "fatigue" ? (
                        <span style={{ color: "red", fontWeight: "bold" }}>
                          High Fatigue 😞
                        </span>
                      ) : (
                        <span style={{ color: "green", fontWeight: "bold" }}>
                          Low Fatigue 😊
                        </span>
                      )}
                    </div>
                    <p className="text-sm">
                      {result.predicted_class === "no_fatigue"
                        ? "The patient is likely to have less than 10 days of fatigue out of the last 14 days."
                        : "The patient is likely to have experienced fatigue for 10 or more of the last 14 days."}
                    </p>
                  </div>
                  <div className="max-w-lg border rounded-lg p-4 bg-gray-50">
                    <h4 className=" uppercase text-sm mb-4">Explanation</h4>

                    <p className="text-sm mb-2">
                      Softmax Output:{" "}
                      <span className="font-bold">
                        {result.predicted_probability.toFixed(3)}
                      </span>
                    </p>
                    <p className="text-sm">
                      The model outputs a probability between 0 and 1 with 0
                      representing low fatigue and 1 representing high fatigue.
                      A value close to 0.5 reflects high uncertainty.
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-4">Force Plot</h3>
                {result.force_plot && (
                  <div className="mt-4 mb-4">
                    <img src={`${result.force_plot}`} alt="Prediction plot" />
                  </div>
                )}
                <h3 className="text-2xl font-medium mb-4">
                  Performance Profiling
                </h3>
                {result.execution_time_ms && (
                  <div className="mb-4">
                    <p>
                      Input Data Formatting:{" "}
                      <span className="font-bold">
                        {result.execution_time_ms.input_data_formatting.toFixed(
                          2
                        )}{" "}
                        ms
                      </span>
                    </p>
                    <p>
                      Dataframe Preparation:{" "}
                      <span className="font-bold">
                        {result.execution_time_ms.dataframe_preparation.toFixed(
                          2
                        )}{" "}
                        ms
                      </span>
                    </p>
                    <p>
                      Model Prediction:{" "}
                      <span className="font-bold">
                        {result.execution_time_ms.model_prediction.toFixed(2)}{" "}
                        ms
                      </span>
                    </p>
                    <p>
                      Force Plot Generation:{" "}
                      <span className="font-bold">
                        {result.execution_time_ms.force_plot_generation.toFixed(
                          2
                        )}{" "}
                        ms
                      </span>
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col text-lg bg-white rounded-lg p-4 md:p-8 text-gray-700 mt-8">
                <h3 className="text-2xl font-medium mb-4">
                  Prediction Results
                </h3>
                <p className="text-center">Awaiting your prediction request.</p>
              </div>
            )}
          </div>
        </SectionWrapper>
      </main>
    </MotionPage>
  );
}
