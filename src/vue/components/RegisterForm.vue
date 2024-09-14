<template>
  <div class="w-full">
    <h1 ref="typingText" class="text-3xl animate-fadeIn py-2 my-2">
      Create a new account
    </h1>
    <div ref="loginForm" class="w-full h-full bg-gray-50 rounded-sm shadow-lg py-5 px-3">
      <div class="w-full mb-2">
        <InlineMessage severity="error" :message="error" @close="hideError" />
      </div>
      <div class="flex justify-center items-center">
        <form @submit.prevent="handleRegister" class="flex flex-col w-full">
          <label for="fullname" class="text-sm font-bold w-full mb-2">Full Name *</label>
          <input
            @change="checkNameString"
            type="text"
            name="name"
            autocomplete="off"
            required
            v-model="resgistration.name"
            :disabled="isLoading"
            placeholder="eg. John Doe"
            id="fullname"
            class="border rounded-sm border-yellow-500 focus:border-pink-500 px-2 py-2 outline-none mb-2"
          />
          <label for="email" class="text-sm font-bold w-full mb-2">Email *</label>
          <input
            @change="checkEmailAddress"
            type="email"
            name="email"
            autocomplete="off"
            required
            v-model="resgistration.email"
            :disabled="isLoading"
            placeholder="eg. yourname@domain.com"
            id="email"
            class="border rounded-sm border-yellow-500 focus:border-pink-500 px-2 py-2 outline-none mb-2"
          />
          <label for="phone" class="text-sm font-bold w-full mb-2">Mobile Number</label>
          <input
            @keyup="checkValidNumber"
            type="text"
            name="phone"
            autocomplete="off"
            v-model="resgistration.phone"
            :disabled="isLoading"
            placeholder="eg. +959 97 249 6871"
            id="phone"
            class="border rounded-sm border-yellow-500 focus:border-pink-500 px-2 py-2 outline-none mb-2"
          />
          <label for="password" class="text-sm font-bold w-full mb-2">Password *</label>
          <div class="relative mb-2">
            <input
              :type="showType ? 'text' : 'password'"
              name="password"
              autocomplete="off"
              required
              v-model="resgistration.password"
              :disabled="isLoading"
              placeholder="Password"
              id="password"
              class="border w-full rounded-sm border-yellow-500 focus:border-pink-500 px-2 py-2 outline-none mb-2"
            />
            <button
              :disabled="isLoading"
              type="button"
              @click="showPassword"
              class="absolute right-2 top-2"
            >
              <span v-if="showType">
                <svg
                  fill="#EC4899"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 256 256"
                  id="Flat"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M50.96,37.3092A4,4,0,1,0,45.04,42.69006L67.5874,67.49231c-38.25329,21.458-54.54358,57.30957-55.24267,58.8833a3.9975,3.9975,0,0,0,0,3.249c.33886.7627,8.51269,18.88672,26.82715,37.19922,16.957,16.95606,46.13378,37.168,88.82812,37.168a122.655,122.655,0,0,0,53.05518-11.68506L205.04,218.69006A4,4,0,1,0,210.96,213.3092Zm98.14246,119.84961a35.99216,35.99216,0,0,1-48.12354-52.936ZM128,195.99182c-31.97656,0-59.88965-11.64648-82.96387-34.61719a135.61312,135.61312,0,0,1-24.59277-33.376c3.64423-7.22461,20.08423-36.8003,52.67383-54.42383L95.57446,98.278a43.99336,43.99336,0,0,0,58.94141,64.83545l20.89307,22.98242A115.06293,115.06293,0,0,1,128,195.99182Zm115.65527-66.36719c-.40625.91211-10.19238,22.584-32.37695,42.4541a4.00008,4.00008,0,1,1-5.33789-5.959,136.40463,136.40463,0,0,0,29.61621-38.12109,135.68983,135.68983,0,0,0-24.59375-33.38282C187.88867,71.64123,159.97656,59.99182,128,59.99182a121.903,121.903,0,0,0-20.02344,1.62988,4,4,0,0,1-1.31836-7.89062A129.8525,129.8525,0,0,1,128,51.99182c42.69531,0,71.87109,20.21582,88.82812,37.17578,18.31543,18.31641,26.48829,36.44531,26.82715,37.208A3.9975,3.9975,0,0,1,243.65527,129.62463Zm-108.876-36.9873a4.00025,4.00025,0,0,1,1.49609-7.85938,44.15619,44.15619,0,0,1,35.53223,39.08692,3.99885,3.99885,0,0,1-3.61035,4.35449c-.127.01172-.252.01758-.377.01758a3.99965,3.99965,0,0,1-3.97754-3.62793A36.11549,36.11549,0,0,0,134.7793,92.63733Z"
                    ></path>
                  </g>
                </svg>
              </span>
              <span v-else>
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.096"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                      stroke="#EC4899"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                      stroke="#EC4899"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </span>
            </button>
          </div>
          <label for="password-confirmation" class="text-sm font-bold w-full mb-2"
            >Retype Password *</label
          >
          <div class="relative mb-2">
            <input
              :type="showConfirmType ? 'text' : 'password'"
              name="password"
              @change="checkConfirmPassword"
              autocomplete="off"
              required
              v-model="resgistration.confirmPassword"
              :disabled="isLoading"
              placeholder="Confirm Password"
              id="passowrd-confirmation"
              class="border w-full rounded-sm border-yellow-500 focus:border-pink-500 px-2 py-2 outline-none mb-2"
            />
            <button
              :disabled="isLoading"
              type="button"
              @click="showConfirmPassword"
              class="absolute right-2 top-2"
            >
              <span v-if="showConfirmType">
                <svg
                  fill="#EC4899"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 256 256"
                  id="Flat"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M50.96,37.3092A4,4,0,1,0,45.04,42.69006L67.5874,67.49231c-38.25329,21.458-54.54358,57.30957-55.24267,58.8833a3.9975,3.9975,0,0,0,0,3.249c.33886.7627,8.51269,18.88672,26.82715,37.19922,16.957,16.95606,46.13378,37.168,88.82812,37.168a122.655,122.655,0,0,0,53.05518-11.68506L205.04,218.69006A4,4,0,1,0,210.96,213.3092Zm98.14246,119.84961a35.99216,35.99216,0,0,1-48.12354-52.936ZM128,195.99182c-31.97656,0-59.88965-11.64648-82.96387-34.61719a135.61312,135.61312,0,0,1-24.59277-33.376c3.64423-7.22461,20.08423-36.8003,52.67383-54.42383L95.57446,98.278a43.99336,43.99336,0,0,0,58.94141,64.83545l20.89307,22.98242A115.06293,115.06293,0,0,1,128,195.99182Zm115.65527-66.36719c-.40625.91211-10.19238,22.584-32.37695,42.4541a4.00008,4.00008,0,1,1-5.33789-5.959,136.40463,136.40463,0,0,0,29.61621-38.12109,135.68983,135.68983,0,0,0-24.59375-33.38282C187.88867,71.64123,159.97656,59.99182,128,59.99182a121.903,121.903,0,0,0-20.02344,1.62988,4,4,0,0,1-1.31836-7.89062A129.8525,129.8525,0,0,1,128,51.99182c42.69531,0,71.87109,20.21582,88.82812,37.17578,18.31543,18.31641,26.48829,36.44531,26.82715,37.208A3.9975,3.9975,0,0,1,243.65527,129.62463Zm-108.876-36.9873a4.00025,4.00025,0,0,1,1.49609-7.85938,44.15619,44.15619,0,0,1,35.53223,39.08692,3.99885,3.99885,0,0,1-3.61035,4.35449c-.127.01172-.252.01758-.377.01758a3.99965,3.99965,0,0,1-3.97754-3.62793A36.11549,36.11549,0,0,0,134.7793,92.63733Z"
                    ></path>
                  </g>
                </svg>
              </span>
              <span v-else>
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.096"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                      stroke="#EC4899"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                      stroke="#EC4899"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </span>
            </button>
          </div>
          <button
            :disabled="isLoading"
            type="submit"
            class="w-full mb-2 flex px-2 py-2 bg-pink-600 text-white font-bold rounded-sm justify-center items-center"
          >
            Register
          </button>
          <label
            for="loginOrReset"
            class="text-sm w-full flex justify-between items-center mb-2 text-yellow-500"
          >
            <a href="/auth/login" class="underline text-pink-500"
              >login with existing account</a
            >. <a href="/auth/reset" class="underline">forgot password?</a>.
          </label>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import InlineMessage from "@/vue/components/InlineMessage.vue";
import SplitType from "split-type";
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { store } from "@/vue/store/store";

const loginForm = ref<HTMLElement | null>(null);
const typingText = ref<HTMLElement | null>(null);
const error = ref<string>("");
const resgistration = ref<{
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}>({
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
});

const showType = ref<boolean>(false);
const showConfirmType = ref<boolean>(false);
const isLoading = ref<boolean>(false);

const showPassword = (): void => {
  showType.value = !showType.value;
};

const showConfirmPassword = (): void => {
  showConfirmType.value = !showConfirmType.value;
};

const handleRegister = (): void => {
  // validate all
  checkConfirmPassword();
  checkValidNumber();
  checkEmailAddress();
  checkNameString();
  // transform schema
  const user = {
    name: resgistration.value.name,
    email: resgistration.value.email,
    password: resgistration.value.password,
    phone: resgistration.value.phone,
  };
  if (error.value) {
    isLoading.value = false;
  } else {
    submitRegisteration(user);
  }
};

const submitRegisteration = (user: {}): void => {
  store
    .dispatch("register", user)
    .then(() => {
      console.log("Registration Success");
    })
    .catch((err: any) => {
      isLoading.value = false;
      error.value = err?.response.data?.message || "An error occurred";
    });
};

const validatePhoneNumber = (phone: string | null): boolean => {
  if (!phone) return true;
  const regex = /^[+\-\(\)\d]+( [+\-\(\)\d]+)*$/;
  return regex.test(phone);
};

const validateEmailAddress = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

const validateConfirmPassword = (password: string): boolean => {
  return resgistration.value.password === password;
};

const checkNameString = (): void => {
  if (
    typeof resgistration.value.name === "string" &&
    resgistration.value.name.trim().length >= 4
  ) {
    error.value = "";
  } else {
    error.value = "Name at least four characters.";
  }
};

const checkValidNumber = (): void => {
  if (validatePhoneNumber(resgistration.value.phone)) {
    error.value = "";
  } else {
    error.value = "Only +, -, (), one space between character allows in Phone Number";
  }
};

const checkEmailAddress = (): void => {
  if (validateEmailAddress(resgistration.value.email)) {
    error.value = "";
  } else if (!resgistration.value.email) {
    error.value = "Email address required";
  } else {
    error.value = "Email must include @ symbol and domain address";
  }
};

const checkConfirmPassword = (): void => {
  if (validateConfirmPassword(resgistration.value.confirmPassword)) {
    error.value = "";
  } else {
    error.value = "Confirm Password must be the same your password";
  }
};

const hideError = (): void => {
  console.log("hide");
  error.value = "";
};

onMounted(() => {
  if (typingText.value) {
    const text = new SplitType(typingText.value, { types: "chars" });
    gsap.from(text.chars, {
      opacity: 0,
      y: 10,
      stagger: 0.05, // Typing speed
      ease: "power4.out",
    });
  }
  gsap.fromTo(
    loginForm.value,
    { translateX: 90, x: 40 },
    { translateX: 0, x: 0, duration: 2 }
  );
});
</script>
